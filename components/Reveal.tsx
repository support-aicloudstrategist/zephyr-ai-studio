'use client';
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)');
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return <motion.div className={className} initial={{ opacity: 0, y: mobile ? 12 : 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: mobile ? '-8% 0px -8% 0px' : '-16% 0px -12% 0px' }} transition={{ duration: mobile ? 0.75 : 1.35, delay: mobile ? Math.min(delay, 0.08) : delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
}
