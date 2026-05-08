import { motion } from 'framer-motion';
export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-transparent mix-blend-difference pointer-events-none"
    >
      <div className="flex items-center gap-3 cursor-pointer group pointer-events-auto">
        <div className="w-6 h-6 border-2 border-white rounded-sm flex items-center justify-center transition-transform duration-500">
          <div className="w-2 h-2 bg-white" />
        </div>
        <span className="font-serif font-medium text-xl tracking-tight text-white">
          FreelancerPlanning
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 pointer-events-auto">
        {['Product', 'Use Cases', 'Pricing', 'Resources', 'About'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1">
            {item}
            {['Product', 'Use Cases', 'Resources'].includes(item) && (
              <span className="text-[10px] opacity-50">▼</span>
            )}
          </a>
        ))}
      </div>

      <div className="pointer-events-auto flex items-center gap-6">
        <a href="#login" className="hidden sm:block text-sm font-medium text-zinc-300 hover:text-white transition-colors">
          Log in
        </a>
        <button className="bg-white/10 text-white px-5 py-2.5 text-sm font-medium border border-white/20 rounded-xl hover:bg-white hover:text-black transition-colors duration-500">
          Start Planning
        </button>
      </div>
    </motion.nav>
  );
};
