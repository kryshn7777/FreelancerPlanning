import React from 'react';
import { motion } from 'framer-motion';

export const StaggerItem = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15, mass: 1 } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
