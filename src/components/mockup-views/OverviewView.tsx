
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { FileBarChart } from 'lucide-react';
import { overviewData } from '../../data/mockApp';
import { ScrambleText } from '../ui/ScrambleText';

const AnimatedSparkline = ({ data, color }: { data: number[], color: string }) => {
  const points = data.map((val, i) => `${(i / (data.length - 1)) * 100},${100 - val}`).join(' L ');
  const path = `M 0,${100 - data[0]} L ${points}`;

  return (
    <svg className="w-full h-10 mt-4 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="drop-shadow-sm"
      />
    </svg>
  );
};

export const OverviewView = ({ activities, setActivities }: any) => {
  return (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <AnimatePresence mode="wait">
          {overviewData.cards.map((card: any, index: number) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="app-card cursor-pointer group hover:border-brutal-accent bg-brutal-surface border border-white/10 relative overflow-hidden flex flex-col p-6 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: card.color === '#111827' || card.color === '#2e7d32' || card.color === '#8b5cf6' ? '#DFFF00' : card.color }} />
              
              <p className="text-xs font-sans font-bold tracking-wider text-brutal-muted uppercase mb-2">{card.title}</p>
              <h3 className="text-4xl font-serif text-brutal-text">
                <ScrambleText text={card.value} />
              </h3>
              <p className="text-xs font-sans font-bold mt-2" style={{ color: card.color === '#111827' || card.color === '#2e7d32' || card.color === '#8b5cf6' ? '#DFFF00' : card.color }}>{card.sub}</p>
              
              <div className="mt-auto pt-6">
                {card.progress ? (
                  <AnimatedSparkline data={card.progress} color={card.color === '#111827' || card.color === '#2e7d32' || card.color === '#8b5cf6' ? '#DFFF00' : card.color} />
                ) : (
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex-grow h-1 bg-white/10 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${card.percent}%` }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="h-full"
                        style={{ backgroundColor: card.color === '#111827' || card.color === '#2e7d32' || card.color === '#8b5cf6' ? '#DFFF00' : card.color }}
                      />
                    </div>
                    <span className="text-xs font-sans font-bold text-brutal-text">{card.percent}%</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow"
      >
        <h3 className="text-sm font-serif tracking-widest text-brutal-text uppercase mb-4">Recent Activity</h3>
        <Reorder.Group as="div" axis="y" values={activities} onReorder={setActivities} className="bg-brutal-surface border border-white/10 overflow-hidden">
          {activities.map((activity: any, i: number) => (
            <Reorder.Item 
              as="div"
              key={activity.id} 
              value={activity}
              className={`p-6 flex items-center justify-between ${i !== activities.length - 1 ? 'border-b border-white/10' : ''} hover:bg-white/5 transition-colors cursor-grab active:cursor-grabbing group bg-brutal-surface`}
              whileDrag={{ scale: 1.02, boxShadow: "-5px 5px 0px 0px rgba(223,255,0,0.5)", borderColor: "#DFFF00" }}
            >
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-brutal-bg border border-white/10 flex items-center justify-center group-hover:border-brutal-accent transition-colors">
                  <FileBarChart size={16} className="text-brutal-muted group-hover:text-brutal-accent transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-sans font-bold text-brutal-text">{activity.title}</p>
                  <p className="text-[10px] font-sans text-brutal-muted uppercase mt-1">{activity.time}</p>
                </div>
              </div>
              <span className="text-xs font-sans font-bold text-brutal-accent uppercase px-2 py-1 border border-brutal-accent/20">{activity.status}</span>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </motion.div>
    </div>
  );
};
