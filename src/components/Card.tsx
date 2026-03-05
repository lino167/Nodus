import React from 'react';
import { cn } from '../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}

export const Card = ({ children, className, title, subtitle, badge }: CardProps) => {
  return (
    <div className={cn('bg-brand-surface border border-brand-border rounded-2xl p-6 relative overflow-hidden group hover:border-brand-cyan/30 transition-all duration-300', className)}>
      {(title || badge) && (
        <div className="flex justify-between items-center mb-4 border-b border-brand-border pb-3">
          <div className="flex flex-col">
            {title && <h3 className="text-white font-display font-bold tracking-tight">{title}</h3>}
            {subtitle && <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mt-0.5">{subtitle}</p>}
          </div>
          {badge && (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};
