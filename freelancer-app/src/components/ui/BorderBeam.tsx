import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  color?: string;
  borderWidth?: number;
}

export const BorderBeam = ({
  className,
  duration = 3,
  color = "#DFFF00",
  borderWidth = 2,
}: BorderBeamProps) => {
  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden rounded-[inherit] pointer-events-none", className)}>
      {/* The spinning gradient */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-80"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, transparent 70%, ${color} 90%, transparent 100%)`,
        }}
      />
      {/* The inner mask that creates the border effect */}
      <div 
        className="absolute inset-[2px] rounded-[inherit] bg-brutal-bg z-10"
        style={{ inset: `${borderWidth}px` }}
      />
    </div>
  );
};
