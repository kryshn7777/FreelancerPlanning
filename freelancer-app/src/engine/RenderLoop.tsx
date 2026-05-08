import { useFrame } from '@react-three/fiber'
import { useEngineState } from '../state/useEngineState'
import * as THREE from 'three'

export function RenderLoop() {
  useFrame((state, delta) => {
    // We can handle global camera logic or overarching scene updates here
    // For instance, smoothing out pointer or scroll velocity values if necessary.
    
    // Example: global time update if we want a single uniform source
    // useEngineState.setState({ time: state.clock.elapsedTime })
  })

  return null
}
