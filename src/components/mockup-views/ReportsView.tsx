
import { motion } from 'framer-motion';
import { reportsData } from '../../data/mockApp';

export const ReportsView = () => {
  const maxIncome = Math.max(...reportsData.monthlyIncome);

  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="bg-brutal-surface border border-white/10 p-6">
        <h3 className="text-sm font-serif tracking-widest text-brutal-text uppercase mb-8">Income Overview (H1)</h3>
        <div className="flex items-end justify-between gap-2 h-48 mt-4">
          {reportsData.monthlyIncome.map((val: number, i: number) => {
            const height = (val / maxIncome) * 100;
            return (
              <div key={i} className="flex flex-col items-center gap-2 flex-grow group">
                <div className="w-full relative h-full flex items-end justify-center">
                  <span className="absolute -top-6 opacity-0 group-hover:opacity-100 text-[10px] font-sans font-bold text-brutal-accent transition-opacity">
                    ${(val/1000).toFixed(1)}k
                  </span>
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                    className="w-full max-w-[40px] bg-brutal-bg border-2 border-white/10 group-hover:bg-brutal-accent group-hover:border-brutal-accent transition-colors"
                  />
                </div>
                <span className="text-[10px] font-sans font-bold text-brutal-muted">{reportsData.months[i]}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reportsData.breakdown.map((item: any, i: number) => (
          <motion.div 
            key={item.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            className="bg-brutal-surface border border-white/10 p-6 flex items-center justify-between group hover:border-brutal-accent transition-colors cursor-pointer"
          >
            <span className="text-base font-sans font-bold text-brutal-text">{item.category}</span>
            <span className="text-2xl font-serif text-brutal-accent">{item.percentage}%</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
