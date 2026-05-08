
import { motion } from 'framer-motion';
import { pipelineData } from '../../data/mockApp';

export const PipelineView = () => {
  return (
    <div className="flex gap-6 h-full overflow-x-auto pb-4 custom-scrollbar">
      {pipelineData.columns.map((col: any, index: number) => (
        <motion.div 
          key={col.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex-shrink-0 w-96 flex flex-col gap-6"
        >
          <div className="flex items-center justify-between border-b-2 border-white/20 pb-2">
            <h3 className="text-sm font-serif tracking-widest text-brutal-text uppercase">{col.title}</h3>
            <span className="text-xs font-sans font-bold text-brutal-muted">{col.value}</span>
          </div>
          
          <div className="flex flex-col gap-6">
            {col.cards.map((card: any) => (
              <motion.div 
                key={card.id}
                whileHover={{ scale: 1.02, y: -2, boxShadow: "-4px 4px 0px 0px rgba(223,255,0,0.5)" }}
                className="bg-brutal-surface border border-white/10 p-6 cursor-pointer group hover:border-brutal-accent transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-base font-sans font-bold text-brutal-text">{card.project}</h4>
                    <p className="text-sm font-sans text-brutal-muted mt-1">{card.client}</p>
                  </div>
                  <span className="text-xs font-serif text-brutal-accent">{card.amount}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-grow h-1.5 bg-white/5 overflow-hidden">
                    <div 
                      className="h-full bg-brutal-accent" 
                      style={{ width: `${card.probability}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-sans font-bold text-brutal-muted">{card.probability}% WIN</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
