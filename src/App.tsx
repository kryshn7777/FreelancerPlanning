import './index.css';
import { CreativeEngine } from './engine/CreativeEngine';
import { SmoothScroll } from './components/dom/SmoothScroll';
import { InteractionProvider } from './components/dom/InteractionProvider';
import { Navbar } from './components/layout/Navbar';
import { AnimatedText } from './components/dom/Typography';
import { ScrollSection } from './components/dom/ScrollSection';

import { DashboardMockup } from './components/dom/DashboardMockup';
import { Shield, CreditCard, Users, Calendar, DollarSign, BarChart3, Presentation } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1], 
      delay: custom 
    }
  })
};

function App() {
  return (
    <SmoothScroll>
      <InteractionProvider>
        <div className="relative w-full bg-transparent text-white antialiased overflow-hidden">
          
          {/* WebGL Layer - Fixed behind everything */}
          <CreativeEngine />
          
          {/* DOM Overlay Layer */}
          <div className="relative z-10 w-full flex flex-col">
            <div className="fixed top-0 left-0 w-full z-50 pointer-events-auto">
              <Navbar />
            </div>
            
            {/* Scrollable Content Container */}
            <div className="w-full relative z-10 pt-[15vh]">
              
              {/* Hero Section (SaaS Layout) */}
              <ScrollSection>
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[85vh] w-full gap-12">
                  
                  {/* Left Column - Copy & CTA */}
                  <div className="flex flex-col items-start w-full lg:w-1/2">
                    <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={0.1}
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 animate-pulse" />
                      <span className="text-xs font-mono tracking-widest uppercase text-zinc-300">The Planning System for Freelancers</span>
                    </motion.div>

                    <AnimatedText 
                      text="Plan with clarity." 
                      className="text-6xl md:text-[5rem] font-serif font-medium text-white leading-[1.1] tracking-tight" 
                    />
                    <AnimatedText 
                      text="Build with freedom." 
                      className="text-6xl md:text-[5rem] font-serif font-medium bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent italic leading-[1.1] tracking-tight" 
                      delay={0.3}
                    />

                    <motion.p 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={0.5}
                      className="mt-8 text-xl text-zinc-400 max-w-lg font-sans leading-relaxed"
                    >
                      FreelancerPlanning helps you forecast income, manage projects, and stay in control of your business.
                    </motion.p>

                    <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={0.6}
                      className="mt-10 flex flex-col sm:flex-row items-center gap-6 pointer-events-auto w-full sm:w-auto"
                    >
                      <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-violet-500 transition-colors flex items-center justify-center gap-2">
                        Start Planning Free
                        <span>→</span>
                      </button>
                      <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                        See how it works
                        <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-xs">▶</span>
                      </button>
                    </motion.div>

                    <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={0.7}
                      className="mt-12 flex items-center gap-6 text-sm text-zinc-400 font-medium"
                    >
                      <div className="flex items-center gap-2"><Shield size={16} /> Private by design</div>
                      <div className="flex items-center gap-2"><CreditCard size={16} /> No credit card required</div>
                      <div className="flex items-center gap-2"><Users size={16} /> Built for freelancers</div>
                    </motion.div>
                  </div>

                  {/* Right Column - Dashboard Mockup */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                    className="w-full lg:w-1/2 flex justify-start perspective-1000 pointer-events-auto"
                  >
                    <div className="relative z-10 w-[900px] scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 origin-left">
                      <DashboardMockup />
                    </div>
                  </motion.div>

                </div>
              </ScrollSection>

              {/* Social Proof */}
              <ScrollSection className="mt-20">
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} custom={0.2}
                  className="w-full py-12 border-y border-white/10 flex flex-col items-center justify-center gap-6 bg-black/20 backdrop-blur-md rounded-3xl pointer-events-auto"
                >
                  <p className="text-zinc-400 text-sm font-medium">Trusted by 1,200+ freelancers worldwide</p>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-4">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-zinc-800" />
                      ))}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent text-lg">★★★★★</div>
                      <span className="text-xs text-zinc-500">4.9/5 from 200+ reviews</span>
                    </div>
                  </div>
                </motion.div>
              </ScrollSection>

              {/* Feature Grid */}
              <ScrollSection className="mt-[20vh] mb-[20vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: <Calendar />, title: 'Smart Planning', desc: 'Plan your schedule, set deadlines, and stay on top of every project.' },
                    { icon: <DollarSign />, title: 'Income Forecasting', desc: 'See exactly how much you\'ll earn each month and plan with confidence.' },
                    { icon: <Users />, title: 'Client Pipeline', desc: 'Track leads, proposals, and projects in one simple pipeline.' },
                    { icon: <BarChart3 />, title: 'Insights & Reports', desc: 'Understand your time, income, and workload with clear, beautiful reports.' }
                  ].map((feat, index) => (
                    <motion.div 
                      key={feat.title}
                      initial="hidden" 
                      whileInView="visible" 
                      viewport={{ once: true, margin: "-100px" }} 
                      variants={fadeInUp} 
                      custom={index * 0.15}
                      className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors pointer-events-auto"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-violet-400">
                        {feat.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white">{feat.title}</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">{feat.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollSection>

              {/* Feature 2 */}
              <ScrollSection className="mt-[40vh]">
                <div className="flex flex-col items-start w-full">
                  <AnimatedText 
                    text="PREDICTIVE" 
                    className="text-6xl md:text-[8rem] font-bold text-transparent style-text-stroke uppercase leading-none tracking-tighter" 
                  />
                  <AnimatedText 
                    text="PRICING" 
                    className="text-6xl md:text-[8rem] font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent uppercase leading-none tracking-tighter" 
                  />
                  <p className="mt-8 text-xl text-zinc-400 max-w-lg font-sans">
                    Never undercharge again. AI algorithms calculate optimal project rates based on market demand, client history, and scope complexity.
                  </p>
                </div>
              </ScrollSection>

              {/* CTA Section */}
              <ScrollSection className="mt-[40vh] mb-[20vh]">
                <div className="flex flex-col items-center text-center">
                  <AnimatedText 
                    text="ELIMINATE" 
                    className="text-5xl md:text-[7rem] font-bold text-white uppercase leading-none" 
                  />
                  <AnimatedText 
                    text="SCOPE CREEP." 
                    className="text-5xl md:text-[7rem] font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent uppercase leading-none" 
                  />
                  <p className="mt-8 text-xl text-zinc-400 max-w-2xl font-sans">
                    Automated contract enforcement and milestone tracking. Focus on your craft while our AI handles the business logic.
                  </p>
                  <button className="mt-16 px-8 py-4 border border-zinc-700 rounded-full hover:bg-white hover:text-black transition-colors duration-500 font-mono uppercase text-sm tracking-widest pointer-events-auto">
                    Initialize Your Agent
                  </button>
                </div>
              </ScrollSection>

            </div>
          </div>
        </div>
      </InteractionProvider>
    </SmoothScroll>
  );
}

export default App;
