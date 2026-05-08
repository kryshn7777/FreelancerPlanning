import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Particles } from '../components/canvas/Particles'
import { Sparks } from '../components/canvas/Sparks'
import { BackgroundSequence } from '../components/canvas/BackgroundSequence'

export function LandingScene() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      // Very slight parallax or rotation for depth, but keep it subtle so the background isn't rotated
      // We apply rotation only to the particles, not the background sequence.
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <>
      <BackgroundSequence />
      
      <group ref={groupRef}>
        <Particles count={1500} />
        <Sparks count={600} />
      </group>
    </>
  )
}
