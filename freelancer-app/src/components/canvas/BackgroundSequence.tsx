import { useRef, useMemo, useEffect, useState } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useEngineState } from '../../state/useEngineState'

const TOTAL_FRAMES = 60

function getFramePath(index: number) {
  const paddedIndex = String(index + 1).padStart(3, '0')
  return `/images/frames/ezgif-frame-${paddedIndex}.jpg`
}

export function BackgroundSequence() {
  const materialRef = useRef<THREE.ShaderMaterial>(null!)
  const [textures, setTextures] = useState<THREE.Texture[]>([])
  const { size } = useThree()

  useEffect(() => {
    const loader = new THREE.TextureLoader()
    const loadPromises = []
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      loadPromises.push(loader.loadAsync(getFramePath(i)))
    }
    
    Promise.all(loadPromises).then(loadedTextures => {
      loadedTextures.forEach(t => {
        t.colorSpace = THREE.SRGBColorSpace
        t.minFilter = THREE.LinearFilter
        t.magFilter = THREE.LinearFilter
        t.generateMipmaps = false
      })
      setTextures(loadedTextures)
    })
  }, [])

  const uniforms = useMemo(() => ({
    tex1: { value: null },
    tex2: { value: null },
    blend: { value: 0.0 },
    resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    imageResolution: { value: new THREE.Vector2(1920, 1080) } // Assumed image resolution
  }), [])

  // Smooth lerped progress state
  const smoothProgress = useRef(0)

  useFrame((state, delta) => {
    if (textures.length === 0) return

    // Fallback to native scroll if lenis progress is unavailable or 0
    let targetProgress = useEngineState.getState().scrollProgress || 0
    if (targetProgress === 0 && typeof window !== 'undefined') {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll > 0) {
        targetProgress = window.scrollY / maxScroll
      }
    }

    smoothProgress.current = THREE.MathUtils.damp(smoothProgress.current, targetProgress, 4, delta)

    const frameFloat = smoothProgress.current * (TOTAL_FRAMES - 1)
    const frame1 = Math.floor(frameFloat)
    const frame2 = Math.min(frame1 + 1, TOTAL_FRAMES - 1)
    const blend = frameFloat - frame1

    if (materialRef.current) {
      materialRef.current.uniforms.tex1.value = textures[frame1]
      materialRef.current.uniforms.tex2.value = textures[frame2]
      materialRef.current.uniforms.blend.value = blend
      materialRef.current.uniforms.resolution.value.set(size.width, size.height)
      
      // Update image resolution if the first texture is loaded
      if (textures[0].image) {
        materialRef.current.uniforms.imageResolution.value.set(textures[0].image.width, textures[0].image.height)
      }
    }
  })

  if (textures.length === 0) return null

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position.xy, 1.0, 1.0);
          }
        `}
        fragmentShader={`
          uniform sampler2D tex1;
          uniform sampler2D tex2;
          uniform float blend;
          uniform vec2 resolution;
          uniform vec2 imageResolution;
          varying vec2 vUv;

          void main() {
            vec2 ratio = resolution / imageResolution;
            vec2 coverRatio = resolution / max(resolution.x * (imageResolution.y / imageResolution.x), resolution.y * (imageResolution.x / imageResolution.y));
            
            // object-fit: cover math
            float rs = max(resolution.x / imageResolution.x, resolution.y / imageResolution.y);
            vec2 newSize = imageResolution * rs;
            vec2 offset = (newSize - resolution) / 2.0 / newSize;
            vec2 uvCover = vUv * (resolution / newSize) + offset;

            vec4 c1 = texture2D(tex1, uvCover);
            vec4 c2 = texture2D(tex2, uvCover);
            
            gl_FragColor = mix(c1, c2, blend);
          }
        `}
      />
    </mesh>
  )
}
