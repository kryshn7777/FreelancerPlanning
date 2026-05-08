import { ReactNode } from 'react'

export function ScrollSection({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <section className={`relative w-full min-h-screen flex items-center justify-center pointer-events-none ${className}`}>
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 pointer-events-auto z-10">
        {children}
      </div>
    </section>
  )
}
