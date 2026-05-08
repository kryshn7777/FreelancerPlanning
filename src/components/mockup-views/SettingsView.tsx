
import { motion } from 'framer-motion';
import { settingsData } from '../../data/mockApp';

export const SettingsView = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 h-full">
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h3 className="text-sm font-serif tracking-widest text-brutal-text uppercase mb-2 border-b border-white/10 pb-4">Profile</h3>
        
        <div className="flex flex-col gap-6">
          <div>
            <label className="text-[10px] font-sans font-bold text-brutal-muted uppercase mb-1 block">Full Name</label>
            <div className="w-full bg-brutal-surface border border-white/10 p-4 text-sm font-sans text-brutal-text">{settingsData.profile.name}</div>
          </div>
          <div>
            <label className="text-[10px] font-sans font-bold text-brutal-muted uppercase mb-1 block">Email</label>
            <div className="w-full bg-brutal-surface border border-white/10 p-4 text-sm font-sans text-brutal-text">{settingsData.profile.email}</div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] font-sans font-bold text-brutal-muted uppercase mb-1 block">Role</label>
              <div className="w-full bg-brutal-surface border border-white/10 p-4 text-sm font-sans text-brutal-text">{settingsData.profile.role}</div>
            </div>
            <div>
              <label className="text-[10px] font-sans font-bold text-brutal-muted uppercase mb-1 block">Default Rate</label>
              <div className="w-full bg-brutal-surface border border-white/10 p-4 text-sm font-sans text-brutal-text">{settingsData.profile.rate}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h3 className="text-sm font-serif tracking-widest text-brutal-text uppercase mb-2 border-b border-white/10 pb-4">Preferences</h3>
        
        <div className="flex flex-col gap-4">
          {Object.entries(settingsData.preferences).map(([key, value]: [string, string], i: number) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex justify-between items-center bg-brutal-surface border border-white/10 p-6 hover:border-brutal-accent transition-colors cursor-pointer group"
            >
              <span className="text-xs font-sans font-bold text-brutal-muted uppercase group-hover:text-brutal-text transition-colors">{key}</span>
              <span className="text-sm font-sans text-brutal-text">{value}</span>
            </motion.div>
          ))}
        </div>

        <button className="mt-auto w-full py-4 bg-brutal-accent text-brutal-bg font-sans font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};
