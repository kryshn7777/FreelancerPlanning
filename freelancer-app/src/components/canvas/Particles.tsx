import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useEngineState } from '../../state/useEngineState'

export function Particles({ count = 2000 }) {
  const mesh = useRef<THREE.InstancedMesh>(null!)
  const light = useRef<THREE.PointLight>(null!)
  const { size, viewport } = useThree()
  
  const isMobile = size.width < 768
  const activeCount = isMobile ? Math.floor(count / 3) : count

  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < activeCount; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -10 + Math.random() * 20
      const yFactor = -10 + Math.random() * 20
      const zFactor = -10 + Math.random() * 20
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [activeCount])

  useFrame(() => {
    if (!mesh.current) return
    const { pointer, scrollVelocity } = useEngineState.getState()
    
    // Light follows pointer loosely
    if (light.current) {
        light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, pointer.x * 10, 0.1)
        light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, pointer.y * 10, 0.1)
    }

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)
      
      // React to scroll velocity - create wind effect
      const windY = scrollVelocity * 0.05
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10 + windY,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.setScalar(s * 0.05)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <pointLight ref={light} distance={15} intensity={5} color="#8b5cf6" />
      <instancedMesh ref={mesh} args={[undefined, undefined, activeCount]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial color="#333" roughness={0.1} metalness={0.8} />
      </instancedMesh>
    </>
  )
}
