import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { RevealText } from '../ui/RevealText';
import { StaggerGroup } from '../ui/StaggerGroup';
import { StaggerItem } from '../ui/StaggerItem';
import { MagneticButton } from '../ui/MagneticButton';
import { ScrambleText } from '../ui/ScrambleText';
import { useEffect } from 'react';

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const targetX = clientX - window.innerWidth / 2;
      const targetY = clientY - window.innerHeight / 2;
      mouseX.set(targetX * 0.1);
      mouseY.set(targetY * 0.1);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  return (
    <motion.div style={{ opacity: heroOpacity, y: heroY }} className="w-full flex flex-col items-center text-center relative z-10 pt-10">
      <RevealText delay={0.1}>
        <div className="inline-flex items-center gap-4 text-brutal-accent text-sm font-sans font-bold tracking-[0.2em] uppercase mb-8 border-b-4 border-brutal-accent pb-2">
          The planning system for freelancers
        </div>
      </RevealText>
      <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden">
        <motion.div 
          style={{ x: smoothX, y: smoothY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brutal-accent/10 rounded-full blur-[120px]"
        />
      </div>

      <RevealText delay={0.2}>
        <h1 className="text-6xl sm:text-7xl md:text-[100px] font-serif text-brutal-text leading-[0.85] mb-8 text-center uppercase">
          <ScrambleText text="Plan with clarity." delay={0.3} duration={1.2} /><br/>
          <span className="text-brutal-accent">Build with freedom.</span>
        </h1>
      </RevealText>
      
      <RevealText delay={0.3}>
        <p className="text-lg md:text-xl text-brutal-muted max-w-2xl mb-12 font-sans font-light leading-relaxed border-t border-white/10 pt-6">
          Forecast income, manage complex projects, and maintain absolute control over your independent business.
        </p>
      </RevealText>

      <StaggerGroup delay={0.4} className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full">
        <StaggerItem className="w-full sm:w-auto">
          <MagneticButton 
            className="w-full sm:w-auto justify-between sm:justify-center btn-brutal flex items-center gap-4 mx-auto relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-4">START PLANNING <ArrowRight size={20} className="shrink-0 group-hover:translate-x-1 transition-transform" /></span>
          </MagneticButton>
        </StaggerItem>
        <StaggerItem className="w-full sm:w-auto">
          <MagneticButton 
            magneticPull={0.2}
            className="w-full sm:w-auto justify-center px-6 py-4 flex items-center gap-3 text-brutal-text font-sans font-medium uppercase tracking-widest text-sm whitespace-nowrap group hover:text-brutal-accent transition-colors border border-white/10 mx-auto bg-brutal-bg"
          >
            SEE IT IN ACTION <Play className="text-brutal-muted group-hover:text-brutal-accent transition-colors shrink-0" size={16} />
          </MagneticButton>
        </StaggerItem>
      </StaggerGroup>
    </motion.div>
  );
};
