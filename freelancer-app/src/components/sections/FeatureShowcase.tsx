import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealText } from '../ui/RevealText';
import { TrendingUp, Users, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { StaggerGroup } from '../ui/StaggerGroup';
import { StaggerItem } from '../ui/StaggerItem';
import { ScrambleText } from '../ui/ScrambleText';

const features = [
  {
    id: "forecasting",
    title: "AI Forecasting",
    icon: TrendingUp,
    description: "Predict your cash flow 6 months ahead based on historical data and current pipeline probabilities. Never be caught off-guard by a slow month again.",
    color: "#DFFF00"
  },
  {
    id: "crm",
    title: "Smart CRM",
    icon: Users,
    description: "Manage every client interaction, from first touch to final invoice. Track project statuses, communication history, and key deliverables in one brutalist interface.",
    color: "#00E5FF"
  },
  {
    id: "invoicing",
    title: "Instant Invoicing",
    icon: FileText,
    description: "Generate and send professional, high-converting invoices in seconds. Automated follow-ups ensure you get paid on time, every time.",
    color: "#FF00E5"
  }
];

export const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  const activeIndex = features.findIndex(f => f.id === activeFeature);

  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-8 py-48 z-10 relative">
      <RevealText>
        <div className="text-center mb-16 border-b-4 border-brutal-surface pb-8">
          <h2 className="text-5xl md:text-7xl font-serif font-black text-brutal-text uppercase tracking-tighter mb-4 leading-none">Focus on the <span className="text-brutal-accent">Work.</span></h2>
          <p className="text-lg text-brutal-muted font-sans font-bold uppercase tracking-widest">We'll handle the rest.</p>
        </div>
      </RevealText>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Tabs */}
        <StaggerGroup className="w-full lg:w-1/3 flex flex-col gap-4">
          {features.map((feature) => {
            const isActive = activeFeature === feature.id;
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.id}>
              <div
                onClick={() => setActiveFeature(feature.id)}
                className={cn(
                  "relative p-6 cursor-pointer rounded-xl border transition-all duration-300",
                  isActive ? "border-transparent" : "border-white/10 hover:border-white/30"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFeatureBg"
                    className="absolute inset-0 bg-brutal-surface border-2 border-brutal-accent shadow-[-5px_5px_0px_0px_rgba(223,255,0,0.3)] rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex items-center gap-4">
                  <div className={cn("p-3 rounded-lg transition-colors", isActive ? "bg-brutal-bg" : "bg-brutal-surface")}>
                    <Icon size={24} className={isActive ? "text-brutal-accent" : "text-brutal-muted"} />
                  </div>
                  <h3 className={cn("font-serif font-bold text-xl uppercase tracking-widest", isActive ? "text-brutal-text" : "text-brutal-muted")}>
                    {feature.title}
                  </h3>
                </div>
              </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Content Display */}
        <div className="w-full lg:w-2/3 h-[450px] relative perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20, rotateY: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, rotateY: -10, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 bg-brutal-surface border border-white/10 p-8 md:p-12 flex flex-col justify-center overflow-hidden group shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Dynamic Abstract Background based on active feature */}
              <div className="absolute inset-0 pointer-events-none z-[-1]">
                <img src="/feature_showcase.png" alt="3D Interface Abstract" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen scale-[1.05]" />
              </div>
              <motion.div 
                className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen transition-colors duration-1000 z-[-1]"
                style={{ 
                  background: `radial-gradient(circle at 80% 50%, ${features[activeIndex].color}40 0%, transparent 60%)` 
                }}
              />

              <div className="relative z-10 max-w-lg">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8 inline-flex p-6 bg-brutal-bg border border-white/5 shadow-xl"
                >
                  {/* Mock UI Element */}
                  {activeIndex === 0 && (
                    <div className="flex items-end gap-3 h-20">
                      {[40, 70, 45, 90, 65, 100].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.3 + (i * 0.1), type: "spring", stiffness: 200, damping: 20 }}
                          className="w-10 bg-brutal-accent border border-brutal-surface"
                        />
                      ))}
                    </div>
                  )}
                  {activeIndex === 1 && (
                    <div className="flex flex-col gap-3 w-56">
                      {[1,2,3].map((_, i) => (
                         <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                          className="w-full h-10 bg-white/5 border border-white/10 flex items-center px-3 gap-3"
                         >
                           <div className="w-5 h-5 rounded-none bg-brutal-accent/80 border border-brutal-accent" />
                           <div className="h-2 bg-white/20 rounded-none w-1/2" />
                         </motion.div>
                      ))}
                    </div>
                  )}
                  {activeIndex === 2 && (
                    <div className="flex flex-col gap-4 w-56">
                       <motion.div 
                          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                          animate={{ scale: 1, opacity: 1, rotate: 0 }}
                          transition={{ delay: 0.3, type: "spring" }}
                          className="w-full h-32 bg-white/5 border-2 border-dashed border-white/20 flex flex-col items-center justify-center gap-2 group-hover:border-brutal-accent transition-colors"
                       >
                          <FileText className="text-white/40 group-hover:text-brutal-accent transition-colors" size={32} />
                          <span className="text-[10px] font-bold tracking-widest uppercase text-brutal-muted">
                            <ScrambleText text="Generate Invoice" />
                          </span>
                       </motion.div>
                    </div>
                  )}
                </motion.div>

                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-serif font-black text-white mb-4 uppercase tracking-tight"
                >
                  {features[activeIndex].title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-brutal-muted font-sans font-medium text-lg leading-relaxed"
                >
                  {features[activeIndex].description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
