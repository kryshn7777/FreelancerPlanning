import { motion } from 'framer-motion'

export function DashboardMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotateX: 10, rotateY: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row pointer-events-auto"
      style={{ perspective: 1000 }}
    >
      {/* Sidebar from prototype */}
      <div className="w-60 border-r border-white/10 p-4 md:p-6 flex-col hidden md:flex" style={{ background: 'transparent' }}>
        <div className="mb-10 p-2 text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><line x1="4" y1="10" x2="20" y2="10" /><line x1="10" y1="20" x2="10" y2="10" /></svg>
        </div>
        
        <div className="flex flex-col gap-2 flex-grow">
          {[
            { icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />, extra: <polyline points="9 22 9 12 15 12 15 22" />, name: 'Overview' },
            { icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>, name: 'Planner' },
            { icon: <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />, name: 'Projects' },
            { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>, name: 'Clients' },
            { icon: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />, name: 'Pipeline' },
            { icon: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>, name: 'Finance' },
            { icon: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>, name: 'Reports' },
            { icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></>, name: 'Settings' }
          ].map((item, i) => (
            <div key={item.name} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all ${i === 0 ? 'bg-white/10 text-white shadow-lg' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {item.icon}
                {item.extra}
              </svg>
              {item.name}
            </div>
          ))}
        </div>
        
        <button className="flex justify-center items-center w-full mt-auto p-3 rounded-lg border border-white/10 text-white hover:bg-white/5 gap-2 text-sm font-medium cursor-pointer transition-all active:scale-95">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          New
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col gap-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-xl font-semibold text-white">Overview</h2>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-colors">
              May 12 - Jun 12, 2026 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-400"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white/10 border border-white/20">
              <div className="w-full h-full bg-gradient-to-tr from-violet-500 to-blue-500"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
            <p className="text-sm font-medium text-zinc-400 mb-2">Income Forecast</p>
            <h3 className="text-3xl font-bold text-white">$8,750</h3>
            <p className="text-xs font-medium mt-1 bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">+12% vs last month</p>
            <svg className="w-full h-10 mt-4" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path d="M0,25 C20,15 30,25 50,20 C70,15 80,5 100,0" stroke="#8b5cf6" fill="none" strokeWidth="2" />
            </svg>
          </div>
          
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
            <p className="text-sm font-medium text-zinc-400 mb-2">Active Projects</p>
            <h3 className="text-3xl font-bold text-white">7</h3>
            <p className="text-xs font-medium mt-1 text-zinc-500">2 due this week</p>
            <svg className="w-full h-10 mt-4" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path d="M0,25 C30,20 40,25 60,15 C80,5 90,10 100,5" stroke="#3b82f6" fill="none" strokeWidth="2" />
            </svg>
          </div>
          
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
            <p className="text-sm font-medium text-zinc-400 mb-2">Monthly Goal</p>
            <h3 className="text-3xl font-bold text-white">$15,000</h3>
            <div className="flex items-center gap-3 mt-8">
                <div className="flex-grow h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-violet-500 to-blue-500" style={{ width: '58%' }}></div>
                </div>
                <span className="text-xs font-semibold text-zinc-400">58%</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4 flex-grow">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
            <h4 className="text-base font-semibold text-white mb-4">Upcoming</h4>
            <div className="flex flex-col flex-grow divide-y divide-white/10">
              {[
                { title: 'Brand Identity', sub: 'Website Redesign', date: 'May 15', color: '#3b82f6' },
                { title: 'Marketing Site', sub: 'Web Development', date: 'May 17', color: '#8b5cf6' },
                { title: 'Mobile App UI', sub: 'UI/UX Design', date: 'May 20', color: '#f59e0b' }
              ].map((task, i) => (
                <div key={i} className="flex justify-between items-start py-3 first:pt-0 last:pb-0 cursor-pointer group/task">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: task.color }}></div>
                    <div>
                      <p className="font-semibold text-sm text-white group-hover/task:text-violet-400 transition-colors">{task.title}</p>
                      <p className="text-xs text-zinc-500">{task.sub}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-zinc-500">{task.date}</span>
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-zinc-400 mt-4 cursor-pointer hover:text-white transition-colors">
              View full schedule &rarr;
            </div>
          </div>
          
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
            <div className="flex justify-between items-center w-full mb-6">
              <h4 className="text-base font-semibold text-white">Income Overview</h4>
              <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-colors">
                This Year <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            </div>
            
            <div className="flex h-40">
              <div className="flex flex-col justify-between items-end pr-4 text-xs text-zinc-500 w-10">
                <span>$15k</span>
                <span>$10k</span>
                <span>$5k</span>
                <span>$0</span>
              </div>
              <div className="flex-grow border-l border-white/10 pl-4 relative flex items-end gap-2 md:gap-4 pt-4">
                {/* Grid lines */}
                <div className="absolute top-0 left-0 right-0 h-px bg-white/5"></div>
                <div className="absolute top-[33.33%] left-0 right-0 h-px bg-white/5"></div>
                <div className="absolute top-[66.66%] left-0 right-0 h-px bg-white/5"></div>
                
                {[
                  { label: 'Jan', h: 25, active: false },
                  { label: 'Feb', h: 40, active: false },
                  { label: 'Mar', h: 55, active: false },
                  { label: 'Apr', h: 50, active: false },
                  { label: 'May', h: 75, active: true },
                  { label: 'Jun', h: 90, active: false }
                ].map((col, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end z-10">
                    <div className="w-full rounded-t-sm transition-all" style={{ height: `${col.h}%`, background: col.active ? 'linear-gradient(to right, #8b5cf6, #3b82f6)' : 'rgba(255,255,255,0.1)' }}></div>
                    <span className="text-xs text-zinc-500">{col.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
