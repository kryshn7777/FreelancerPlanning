
import { motion } from 'framer-motion';
import { financeData } from '../../data/mockApp';

export const FinanceView = () => {
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {financeData.metrics.map((metric: any, index: number) => (
          <motion.div 
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-brutal-surface border border-white/10 p-6 flex flex-col justify-between"
          >
            <p className="text-xs font-sans font-bold tracking-wider text-brutal-muted uppercase mb-4">{metric.label}</p>
            <h3 className="text-4xl font-serif text-brutal-text">{metric.value}</h3>
            <p className="text-xs font-sans font-bold text-brutal-accent mt-4 bg-brutal-accent/10 w-max px-2 py-1">{metric.trend}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex-grow"
      >
        <h3 className="text-sm font-serif tracking-widest text-brutal-text uppercase mb-4">Recent Invoices</h3>
        <div className="bg-brutal-surface border border-white/10">
          <div className="grid grid-cols-4 p-4 border-b border-white/10 text-xs font-sans font-bold text-brutal-muted uppercase">
            <div>Invoice</div>
            <div>Client</div>
            <div>Date</div>
            <div className="text-right">Status</div>
          </div>
          {financeData.invoices.map((inv: any, i: number) => (
            <div 
              key={inv.id} 
              className={`grid grid-cols-4 p-4 items-center ${i !== financeData.invoices.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/5 transition-colors cursor-pointer group`}
            >
              <div className="text-sm font-sans font-bold text-brutal-text">{inv.id}</div>
              <div className="text-sm font-sans text-brutal-muted">{inv.client}</div>
              <div className="text-sm font-sans text-brutal-muted">{inv.date}</div>
              <div className="text-right">
                <span className={`text-xs font-sans font-bold uppercase px-2 py-1 ${inv.status === 'PAID' ? 'bg-brutal-accent/20 text-brutal-accent border border-brutal-accent/30' : inv.status.includes('DUE') ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-white/10 text-brutal-text border border-white/20'}`}>
                  {inv.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
