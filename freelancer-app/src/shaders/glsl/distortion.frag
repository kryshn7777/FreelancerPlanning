uniform float uTime;
uniform vec3 uColor;
uniform float uScrollVelocity;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;

#include <common>
#include <fog_pars_fragment>

void main() {
  vec3 color = uColor;
  
  // Fake rim lighting
  vec3 viewDir = normalize(cameraPosition - vViewPosition);
  float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
  rim = smoothstep(0.6, 1.0, rim);
  
  // Brighten based on scroll velocity and rim lighting
  vec3 glow = vec3(0.55, 0.36, 0.96) * rim * (1.0 + abs(uScrollVelocity) * 0.2); // Violet-blue tint
  color += glow;
  
  // Procedural grid pattern overlay
  float gridX = sin(vUv.x * 100.0);
  float gridY = sin(vUv.y * 100.0);
  if (gridX * gridY > 0.98) {
      color += vec3(0.3);
  }

  gl_FragColor = vec4(color, 1.0);
  
  #include <fog_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
