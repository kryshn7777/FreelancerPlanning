import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Sparks({ count = 500 }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  // Generate random initial positions and properties
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 10
      const speed = 0.5 + Math.random() * 2
      const offset = Math.random() * Math.PI * 2
      temp.push({ x, y, z, speed, offset })
    }
    return temp
  }, [count])

  useFrame((state, delta) => {
    if (!meshRef.current) return

    particles.forEach((particle, i) => {
      const time = state.clock.elapsedTime
      
      // Upward motion like fire sparks
      particle.y += particle.speed * delta
      // Reset if it goes too high
      if (particle.y > 10) {
        particle.y = -10
        particle.x = (Math.random() - 0.5) * 20
      }

      // Harmonic drift
      const xOffset = Math.sin(time * 0.5 + particle.offset) * 0.5
      
      dummy.position.set(particle.x + xOffset, particle.y, particle.z)
      dummy.scale.setScalar(Math.sin(time * 2 + particle.offset) * 0.5 + 0.5)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
      {/* We use a simple plane or sphere for sparks */}
      <circleGeometry args={[0.02, 8]} />
      <meshBasicMaterial 
        color="#8A2BE2" // Blue-violet tint
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </instancedMesh>
  )
}
