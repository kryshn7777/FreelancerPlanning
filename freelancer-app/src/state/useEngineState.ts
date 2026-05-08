import { create } from 'zustand'

interface EngineState {
  scrollVelocity: number
  scrollProgress: number
  pointer: { x: number, y: number }
  setScrollVelocity: (v: number) => void
  setScrollProgress: (p: number) => void
  setPointer: (x: number, y: number) => void
}

export const useEngineState = create<EngineState>((set) => ({
  scrollVelocity: 0,
  scrollProgress: 0,
  pointer: { x: 0, y: 0 },
  setScrollVelocity: (v) => set({ scrollVelocity: v }),
  setScrollProgress: (p) => set({ scrollProgress: p }),
  setPointer: (x, y) => set({ pointer: { x, y } })
}))
