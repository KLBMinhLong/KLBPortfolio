import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'indigo' | 'teal';
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'indigo',
  style = {}
}) => {
  const glowStyle = glowColor === 'teal'
    ? { '--hover-glow': 'var(--shadow-glow-teal)' }
    : { '--hover-glow': 'var(--shadow-glow)' };

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`glass-card ${className}`}
      style={{ ...glowStyle, ...style } as React.CSSProperties}
    >
      {children}
    </motion.div>
  );
};
