import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { RenderLoop } from './RenderLoop'
import { CameraRig } from './CameraRig'
import { PostProcessing } from '../postprocessing/PostProcessing'
import { LandingScene } from '../scenes/LandingScene'

export function CreativeEngine() {
  return (
    <div className="fixed inset-0 w-screen h-screen z-[-1] bg-[#050505]">
      <Canvas
        gl={{ powerPreference: "high-performance", antialias: false, stencil: false }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <CameraRig />
          <LandingScene />
          <RenderLoop />
          <PostProcessing />
        </Suspense>
      </Canvas>
    </div>
  )
}
