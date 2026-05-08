
import { motion } from 'framer-motion';
import { projectsData } from '../../data/mockApp';

export const ProjectsView = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-serif tracking-widest text-brutal-text uppercase">Active Projects</h3>
        <button className="text-xs font-sans font-bold text-brutal-accent uppercase hover:text-white transition-colors">View All Archive</button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projectsData.active.map((project: any, index: number) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-brutal-surface border border-white/10 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group hover:border-brutal-accent transition-colors cursor-pointer"
          >
            <div className="flex-grow">
              <div className="flex items-center gap-4 mb-2">
                <h4 className="text-xl font-sans font-bold text-brutal-text">{project.name}</h4>
                <span className={`text-[10px] font-sans font-bold uppercase px-2 py-0.5 border ${project.status === 'ON TRACK' ? 'bg-brutal-accent/10 text-brutal-accent border-brutal-accent/30' : project.status === 'AT RISK' ? 'bg-red-500/10 text-red-400 border-red-500/30' : 'bg-white/5 text-brutal-muted border-white/10'}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-sm font-sans text-brutal-muted">{project.client} • Deadline: <span className="text-brutal-text">{project.deadline}</span></p>
            </div>

            <div className="w-full md:w-64 shrink-0">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-sans text-brutal-muted uppercase">Progress</span>
                <span className="text-xs font-sans font-bold text-brutal-text">{project.progress}%</span>
              </div>
              <div className="w-full h-2 bg-white/5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  className={`h-full ${project.status === 'AT RISK' ? 'bg-red-500' : 'bg-brutal-accent'}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
