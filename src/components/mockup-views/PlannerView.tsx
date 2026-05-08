
import { motion } from 'framer-motion';
import { plannerData } from '../../data/mockApp';
import { Clock } from 'lucide-react';

export const PlannerView = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 h-full">
      <div className="w-full md:w-2/3 flex flex-col gap-6">
        <h3 className="text-sm font-serif tracking-widest text-brutal-text uppercase mb-2 border-b border-white/10 pb-4">Today's Schedule</h3>
        <div className="relative border-l border-white/10 ml-4 pl-6 flex flex-col gap-8 py-4">
          {plannerData.today.map((item: any, index: number) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[31px] top-1 w-3 h-3 bg-brutal-bg border-2 border-white/20 group-hover:border-brutal-accent transition-colors" />
              <div className="flex items-center gap-2 mb-1">
                <Clock size={12} className="text-brutal-accent" />
                <span className="text-xs font-sans font-bold text-brutal-accent">{item.time}</span>
              </div>
              <div className="bg-brutal-surface border border-white/10 p-6 group-hover:border-brutal-accent transition-colors cursor-pointer">
                <h4 className="text-base font-sans font-bold text-brutal-text">{item.title}</h4>
                <span className="inline-block mt-2 text-[10px] font-sans font-bold text-brutal-muted uppercase border border-white/10 px-2 py-0.5">{item.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="w-full md:w-1/3">
        <div className="bg-brutal-surface border border-white/10 p-6">
          <h3 className="text-sm font-serif tracking-widest text-brutal-text uppercase mb-4 text-center">May 2026</h3>
          <div className="grid grid-cols-7 gap-2 text-center mb-2">
            {['S','M','T','W','T','F','S'].map(d => <span key={d} className="text-[10px] font-sans font-bold text-brutal-muted">{d}</span>)}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            {Array.from({length: 31}).map((_, i) => (
              <div 
                key={i} 
                className={`text-xs font-sans p-1 ${i + 1 === 12 ? 'bg-brutal-accent text-brutal-bg font-bold' : 'text-brutal-text hover:bg-white/10 cursor-pointer'} transition-colors`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
