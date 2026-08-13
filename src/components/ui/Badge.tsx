import React from 'react';
import './Badge.css';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  variant?: 'solid' | 'outline' | 'glass';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  color,
  variant = 'glass',
  size = 'md',
}) => {
  const style = color
    ? {
        '--badge-color': color,
        borderColor: variant === 'outline' ? color : undefined,
        background: variant === 'solid' ? color : undefined,
      } as React.CSSProperties
    : {};

  return (
    <span className={`badge badge-${variant} badge-${size}`} style={style}>
      {children}
    </span>
  );
};
