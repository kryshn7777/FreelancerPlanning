import React from 'react';
import { motion } from 'framer-motion';

export const StaggerGroup = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay
          }
        },
        hidden: {}
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
