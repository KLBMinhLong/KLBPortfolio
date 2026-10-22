import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Kept for call-site compatibility; sections no longer animate in. */
  delay?: number;
}

// The site has one motion moment (the hero ledger). Everything else renders in place.
export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
