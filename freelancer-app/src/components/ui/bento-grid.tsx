import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MagicCard } from "./magic-card"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] grid-cols-3 gap-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("group relative rounded-xl h-full", className)}
    >
      <MagicCard
        gradientColor="#DFFF00"
        gradientFrom="#DFFF00"
        gradientTo="#0F0F0F"
        gradientOpacity={1}
        className={cn(
          "group/card relative flex flex-col justify-start overflow-hidden rounded-xl h-full w-full",
          "bg-brutal-surface border border-white/10"
        )}
        {...props}
      >
        <div className="absolute inset-0 z-0">{background}</div>
        <div className="relative z-10 p-6 flex flex-col h-full pointer-events-none">
          <div className="flex flex-col gap-2 transition-all duration-300 lg:group-hover:-translate-y-2 max-w-[85%]">
            <Icon className="h-8 w-8 origin-left transform-gpu text-brutal-accent transition-all duration-300 ease-in-out group-hover:scale-90" />
            <h3 className="text-2xl font-serif font-bold text-brutal-text uppercase tracking-tight">
              {name}
            </h3>
            <p className="text-brutal-muted font-sans font-medium uppercase tracking-widest text-xs leading-relaxed">{description}</p>
          </div>
          
          <div className="mt-auto pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 pt-4">
            <Button variant="link" size="sm" className="p-0 text-brutal-accent hover:text-white transition-colors" render={<a href={href} />} nativeButton={false}>
              {cta}
              <ArrowRightIcon className="ms-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-brutal-bg/10 z-0" />
      </MagicCard>
    </motion.div>
  )
}

export { BentoCard, BentoGrid }
