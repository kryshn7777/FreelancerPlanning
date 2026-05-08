import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'

export function PostProcessing() {
  return (
    <EffectComposer disableNormalPass multisampling={0}>
      <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
      <Noise opacity={0.025} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  )
}
