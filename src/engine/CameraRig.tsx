import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useEngineState } from '../state/useEngineState'

export function CameraRig() {
  useFrame((state) => {
    // 1. Inertial Camera Drift based on pointer
    const { pointer, scrollVelocity } = useEngineState.getState()
    
    // Target position based on cursor (subtle movement)
    const targetX = pointer.x * 0.8
    const targetY = pointer.y * 0.8
    
    // Smoothly interpolate camera position towards target
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.02)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.02)
    
    // 2. Add subtle wobble/drift over time (Cinematic drifting)
    const time = state.clock.elapsedTime
    state.camera.position.x += Math.sin(time * 0.5) * 0.005
    state.camera.position.y += Math.cos(time * 0.3) * 0.005
    
    // 3. Influence FOV or Z position slightly based on scroll momentum
    // When scrolling fast, pull camera back slightly to create depth
    const targetZ = 5 + Math.abs(scrollVelocity) * 0.015
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05)

    // Ensure camera always looks at center
    state.camera.lookAt(0, 0, 0)
  })

  return null
}
