'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-16% 0px -12% 0px' }} transition={{ duration: 1.35, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
}
