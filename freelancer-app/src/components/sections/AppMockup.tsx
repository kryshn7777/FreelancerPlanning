import React, { useState } from 'react';
import { motion, AnimatePresence, MotionValue } from 'framer-motion';
import { LayoutDashboard, Calendar, FolderKanban, Users, PlaySquare, FileBarChart, Settings, Bell, Search, Plus } from 'lucide-react';

interface AppMockupProps {
  mockupY: MotionValue<number>;
  mockupRotateX: MotionValue<number>;
  mockupScale: MotionValue<number>;
}

import { overviewData } from '../../data/mockApp';
import { OverviewView } from '../mockup-views/OverviewView';
import { PipelineView } from '../mockup-views/PipelineView';
import { FinanceView } from '../mockup-views/FinanceView';
import { ProjectsView } from '../mockup-views/ProjectsView';
import { ClientsView } from '../mockup-views/ClientsView';
import { PlannerView } from '../mockup-views/PlannerView';
import { ReportsView } from '../mockup-views/ReportsView';
import { SettingsView } from '../mockup-views/SettingsView';
import { BorderBeam } from '../ui/BorderBeam';
import { MagneticButton } from '../ui/MagneticButton';
import { RevealText } from '../ui/RevealText';



export const AppMockup: React.FC<AppMockupProps> = ({ mockupY, mockupRotateX, mockupScale }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [showNotifications, setShowNotifications] = useState(false);
  const [activities, setActivities] = useState(overviewData.activities);

  const tabs = ['Overview', 'Planner', 'Projects', 'Clients', 'Pipeline', 'Finance', 'Reports', 'Settings'];

  // Swipe logic
  const handleDragEnd = (_event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const swipeThreshold = 50;

    const currentIndex = tabs.indexOf(activeTab);
    if (offset < -swipeThreshold || velocity < -500) {
      // Swipe Left -> Next Tab
      if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1]);
    } else if (offset > swipeThreshold || velocity > 500) {
      // Swipe Right -> Prev Tab
      if (currentIndex > 0) setActiveTab(tabs[currentIndex - 1]);
    }
  };

  return (
    <div className="w-full overflow-x-auto pb-12 custom-scrollbar z-20 relative">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ 
          y: mockupY, 
          rotateX: mockupRotateX,
          scale: mockupScale,
          transformOrigin: 'top center'
        }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative w-full min-w-[800px] will-change-transform"
      >
        <div className="absolute -inset-10 bg-brutal-bg z-[-1] opacity-60 pointer-events-none blur-xl" />
        
        <div className="app-mockup group relative transition-all duration-700 ease-out w-full max-w-none overflow-hidden bg-brutal-surface border-2 border-brutal-accent shadow-[-10px_10px_0px_0px_rgba(223,255,0,0.5)] flex h-auto min-h-[700px]">
          
          <BorderBeam className="z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" duration={3} borderWidth={4} color="#DFFF00" />

          {/* Sidebar */}
          <div className="app-sidebar relative z-20 flex shrink-0 bg-[#0F0F0F] border-r border-white/10 w-60 flex-col py-6 px-4">
          <div className="mb-8 px-2 flex items-center justify-between">
            <LayoutDashboard size={24} className="text-brutal-accent" />
            <Search size={18} className="text-brutal-muted cursor-pointer hover:text-brutal-text transition-colors" />
          </div>
          <div className="flex flex-col gap-1 flex-grow">
            {tabs.map((item, i) => {
              const isActive = activeTab === item;
              return (
                <div 
                  key={item} 
                  onClick={() => setActiveTab(item)}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm font-sans font-medium cursor-pointer transition-all duration-200 relative ${isActive ? 'text-brutal-bg' : 'text-brutal-muted hover:bg-white/5 hover:text-brutal-text'}`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="sidebar-active" 
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="absolute inset-0 bg-brutal-accent border border-brutal-accent shadow-[-2px_2px_0px_0px_#E8E6E1] -z-10" 
                    />
                  )}
                  {i === 0 && <LayoutDashboard size={18} className={isActive ? 'text-brutal-bg' : 'opacity-60'} />}
                  {i === 1 && <Calendar size={18} className={isActive ? 'text-brutal-bg' : 'opacity-60'} />}
                  {i === 2 && <FolderKanban size={18} className={isActive ? 'text-brutal-bg' : 'opacity-60'} />}
                  {i === 3 && <Users size={18} className={isActive ? 'text-brutal-bg' : 'opacity-60'} />}
                  {i === 4 && <PlaySquare size={18} className={isActive ? 'text-brutal-bg' : 'opacity-60'} />}
                  {i === 5 && <FileBarChart size={18} className={isActive ? 'text-brutal-bg' : 'opacity-60'} />}
                  {i > 5 && <Settings size={18} className={isActive ? 'text-brutal-bg' : 'opacity-60'} />}
                  {item}
                </div>
              );
            })}
          </div>
          <div className="mt-auto px-2">
            <MagneticButton className="w-full py-3 bg-brutal-surface border border-white/20 text-brutal-text hover:border-brutal-accent hover:text-brutal-accent font-serif uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-colors">
              <Plus size={16} /> New Entry
            </MagneticButton>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="app-main relative z-20 flex-1 bg-brutal-bg p-6 md:p-8 flex flex-col border-l border-white/5">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 mb-8">
            <AnimatePresence mode="wait">
              <motion.h2 
                key={activeTab}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-3xl font-serif uppercase tracking-widest text-brutal-text"
              >
                <RevealText>{activeTab}</RevealText>
              </motion.h2>
            </AnimatePresence>
            
            <div className="flex items-center gap-4 shrink-0 relative">
              <div className="px-4 py-2 bg-brutal-surface border border-white/20 text-xs font-sans font-medium text-brutal-text cursor-pointer hover:border-brutal-accent transition-all">
                MAY 12 - JUN 12, 2026 <span className="text-[10px] text-brutal-muted ml-2">▼</span>
              </div>
              
              <div 
                className="p-3 bg-brutal-surface border border-white/20 cursor-pointer hover:border-brutal-accent transition-all relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell size={16} className="text-brutal-text" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-brutal-accent border-2 border-brutal-surface"></span>
              </div>

              {/* Notification Dropdown Simulation */}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute top-14 right-14 w-64 bg-brutal-surface border-2 border-brutal-accent shadow-[-5px_5px_0px_0px_rgba(223,255,0,0.5)] p-4 z-50 origin-top-right"
                  >
                    <h4 className="text-sm font-serif tracking-widest uppercase mb-4 text-brutal-text border-b border-white/10 pb-2">Notifications</h4>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-3 items-start">
                        <div className="w-2 h-2 bg-brutal-accent mt-1.5"></div>
                        <div>
                          <p className="text-sm font-sans font-bold text-brutal-text">Invoice #402 paid</p>
                          <p className="text-[10px] font-sans text-brutal-muted uppercase mt-0.5">2 MINS AGO</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <div className="w-2 h-2 bg-white mt-1.5"></div>
                        <div>
                          <p className="text-sm font-sans font-bold text-brutal-text">Client approved mockup</p>
                          <p className="text-[10px] font-sans text-brutal-muted uppercase mt-0.5">1 HOUR AGO</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="w-10 h-10 bg-brutal-accent shrink-0 border-2 border-brutal-surface shadow-sm cursor-pointer hover:bg-white transition-colors"></div>
            </div>
          </div>
          
          {/* Dynamic Data Grid */}
          <motion.div 
            key={activeTab}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="flex-grow cursor-grab active:cursor-grabbing h-full"
          >
            {activeTab === 'Overview' && <OverviewView activities={activities} setActivities={setActivities} />}
            {activeTab === 'Pipeline' && <PipelineView />}
            {activeTab === 'Finance' && <FinanceView />}
            {activeTab === 'Projects' && <ProjectsView />}
            {activeTab === 'Clients' && <ClientsView />}
            {activeTab === 'Planner' && <PlannerView />}
            {activeTab === 'Reports' && <ReportsView />}
            {activeTab === 'Settings' && <SettingsView />}
          </motion.div>

        </div>
      </div>
    </motion.div>
    </div>
  );
};
