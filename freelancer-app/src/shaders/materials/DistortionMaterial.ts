import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import vertex from '../glsl/distortion.vert?raw'
import fragment from '../glsl/distortion.frag?raw'

export const DistortionMaterial = shaderMaterial(
  {
    uTime: 0,
    uScrollVelocity: 0,
    uColor: new THREE.Color('#050505'), 
  },
  vertex,
  fragment,
  (material) => {
    material.transparent = true
    material.wireframe = false
    material.fog = true
  }
)
