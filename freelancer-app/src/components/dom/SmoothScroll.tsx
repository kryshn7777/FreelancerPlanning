import { useEffect } from 'react'
import Lenis from 'lenis'
import { useEngineState } from '../../state/useEngineState'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
    })

    lenis.on('scroll', (e: any) => {
      console.log("Lenis Scroll Progress:", e.progress);
      useEngineState.setState({ 
        scrollVelocity: e.velocity,
        scrollProgress: e.progress 
      })
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
