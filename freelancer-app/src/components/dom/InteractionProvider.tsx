import { useEffect } from 'react'
import { useEngineState } from '../../state/useEngineState'

export function InteractionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      // Normalize pointer coordinates to WebGL space (-1 to +1)
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      useEngineState.setState({ pointer: { x, y } })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return <>{children}</>
}
