import { BentoGrid as MagicBentoGrid, BentoCard } from '../ui/bento-grid';
import { Calendar, TrendingUp, Users, PieChart } from 'lucide-react';
import { RevealText } from '../ui/RevealText';
import { motion } from 'framer-motion';

export const BentoGrid = () => {
  const cardsData = [
    {
      name: "Intelligent Forecasting",
      description: "Stop guessing. Our algorithm projects your income 6 months into the future based on your active contracts, historical data, and pipeline probability.",
      Icon: TrendingUp,
      className: "md:col-span-2 md:row-span-2 group",
      href: "#",
      cta: "Learn more",
      background: (
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
          <img src="/forecasting.png" alt="Forecasting" className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-60 z-[-1] transition-transform duration-700 group-hover:scale-105" />
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0" />
          
          {/* Massive Line Chart */}
          <svg className="w-[120%] h-[70%] absolute -bottom-10 -left-10 z-10 preserve-aspect-ratio-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="forecastGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFFF00" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#DFFF00" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ d: "M 0 100 Q 25 100 50 100 T 100 100" }}
              whileInView={{ d: "M 0 100 Q 20 80 40 70 T 70 30 T 100 10" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut", type: "spring", bounce: 0.2 }}
              fill="url(#forecastGrad)"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M 0 100 Q 20 80 40 70 T 70 30 T 100 10"
              fill="none"
              stroke="#DFFF00"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
          </svg>

          {/* Floating Metrics */}
          <div className="absolute bottom-8 right-8 z-20 flex flex-col items-end gap-1 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <span className="text-brutal-accent font-sans font-bold text-sm tracking-widest">+24% GROWTH</span>
            <span className="text-white font-serif font-black text-4xl leading-none">$124,500</span>
            <span className="text-brutal-muted text-xs uppercase tracking-widest mt-1">Projected Q3</span>
          </div>

          <div className="absolute bottom-16 left-[30%] z-20 flex flex-col items-start gap-1 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
             <div className="w-3 h-3 rounded-full bg-brutal-accent mb-2 animate-pulse shadow-[0_0_15px_#DFFF00]" />
            <span className="text-white font-serif font-black text-2xl leading-none">$82,000</span>
            <span className="text-brutal-muted text-xs uppercase tracking-widest">Current</span>
          </div>
        </div>
      )
    },
    {
      name: "Client Pipeline",
      description: "Keep track of every lead, pitch, and contract with brutal efficiency.",
      Icon: Users,
      className: "md:col-span-1 md:row-span-1 group",
      href: "#",
      cta: "View Pipeline",
      background: (
        <div className="absolute inset-0 w-full h-full overflow-hidden relative opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <img src="/pipeline.png" alt="Pipeline" className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-60 z-[-1] transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute bottom-0 right-0 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_bottom_right,#DFFF0022_0%,transparent_70%)] z-0 blur-xl" />
          <div className="absolute -bottom-16 -right-12 flex flex-col gap-2 w-[140%] rotate-[-6deg] z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 scale-[0.65] origin-bottom-right">
            {['Proposal Sent', 'Contract Negotiation', 'Active Project'].map((status, i) => (
              <motion.div 
                key={`pipeline-${i}`}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                className="w-full bg-brutal-bg p-4 flex items-center justify-between border-2 border-brutal-surface hover:border-brutal-accent transition-colors shadow-xl group/item"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-serif font-bold text-white text-lg leading-none">{['Studio V.', 'Nexus Inc.', 'Onyx Labs'][i]}</span>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-brutal-accent animate-pulse' : 'bg-brutal-muted'}`} />
                    <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-brutal-muted">{status}</span>
                  </div>
                </div>
                <span className="font-sans font-bold text-brutal-accent group-hover/item:scale-110 transition-transform">${[12.5, 45.0, 8.2][i]}k</span>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      name: "Time Logging",
      description: "Log hours seamlessly across different projects and generate instant invoices.",
      Icon: Calendar,
      className: "relative group md:col-span-1 md:row-span-1",
      href: "#",
      cta: "Track Time",
      background: (
        <div className="absolute inset-0 w-full h-full relative overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-end justify-end">
          <img src="/time.png" alt="Time Logging" className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-60 z-[-1] transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute -bottom-24 -right-24 w-[150%] h-[150%] flex items-center justify-center scale-[0.5] origin-bottom-right">
          {/* Brutalist Clock Ring */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[150%] h-[150%] max-w-[400px] max-h-[400px] rounded-full border-[10px] border-dashed border-brutal-surface opacity-50 z-0"
          />
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[120%] h-[120%] max-w-[320px] max-h-[320px] rounded-full border-[2px] border-brutal-accent opacity-20 z-0"
          />
          
          <div className="z-10 flex flex-col items-center justify-center bg-brutal-bg/80 backdrop-blur-sm p-4 border border-white/5 shadow-2xl">
            <span className="font-serif font-black text-5xl tracking-tighter text-white">04<span className="text-brutal-accent animate-pulse">:</span>23<span className="text-brutal-accent animate-pulse">:</span>45</span>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-brutal-muted">Logging: Onyx Labs</span>
            </div>
          </div>
          </div>
        </div>
      )
    },
    {
      name: "Raw Data",
      description: "Investor-grade dashboards. No fluff, just the numbers you need to scale.",
      Icon: PieChart,
      className: "md:col-span-3 md:row-span-1 group",
      href: "#",
      cta: "Analyze",
      background: (
        <div className="absolute inset-0 w-full h-full relative overflow-hidden opacity-30 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-end p-6 gap-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_100%_100%,#DFFF0015_0%,transparent_100%)] z-0" />
          
          {/* Dense Widget Grid */}
          <div className="absolute bottom-2 right-4 grid grid-cols-3 gap-6 w-[50%] h-[55%] z-10 origin-bottom-right">
            {/* Widget 1 */}
            <div className="col-span-1 border-t-2 border-brutal-surface pt-2 flex flex-col justify-end pb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-brutal-muted text-[10px] font-bold uppercase tracking-widest">Conversion</span>
              <span className="text-white font-serif font-black text-3xl">64%</span>
              <div className="w-full h-1 bg-brutal-surface mt-2"><div className="h-full bg-brutal-accent w-[64%]" /></div>
            </div>
            {/* Widget 2 */}
            <div className="col-span-2 border-t-2 border-brutal-surface pt-2 flex flex-col justify-end pb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
              <span className="text-brutal-muted text-[10px] font-bold uppercase tracking-widest">Weekly Hours</span>
              <div className="flex items-end gap-1 h-12 mt-2">
                {[30, 45, 20, 60, 40, 80, 50].map((h, i) => (
                  <div key={`bar-${i}`} className="flex-1 bg-white/10 hover:bg-brutal-accent transition-colors" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            {/* Widget 3 */}
            <div className="col-span-3 border-t-2 border-brutal-surface pt-2 flex justify-between items-center pb-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-700 delay-150">
              <div className="flex flex-col">
                 <span className="text-brutal-muted text-[10px] font-bold uppercase tracking-widest">Active Clients</span>
                 <div className="flex -space-x-2 mt-1">
                   {[1,2,3,4].map(i => <div key={`avatar-${i}`} className="w-6 h-6 rounded-full bg-brutal-surface border border-brutal-bg z-10" />)}
                 </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-brutal-muted text-[10px] font-bold uppercase tracking-widest">MRR</span>
                <span className="text-brutal-accent font-serif font-black text-xl">$12.4k</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-8 py-48 z-10 relative">
      <RevealText>
        <div className="text-center md:text-left mb-16 border-b-4 border-brutal-surface pb-8">
          <h2 className="text-5xl md:text-8xl font-serif font-black text-brutal-text uppercase tracking-tighter leading-none mb-4">The Operating <br /><span className="text-brutal-accent">System.</span></h2>
          <p className="text-xl md:text-2xl text-brutal-muted font-sans font-bold uppercase tracking-widest max-w-2xl">Powerful features designed specifically for the modern independent business.</p>
        </div>
      </RevealText>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <MagicBentoGrid>
          {cardsData.map((card) => (
            <BentoCard key={card.name} {...card} />
          ))}
        </MagicBentoGrid>
      </motion.div>
    </section>
  );
};
