import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-[#00F0FF] text-[#0B0F14] hover:bg-[#00F0FF]/90 shadow-[0_0_15px_rgba(0,240,255,0.3)]',
    secondary: 'bg-[#111827] text-white hover:bg-[#111827]/80',
    outline: 'border border-[#243041] text-white hover:bg-[#111827]',
    ghost: 'text-slate-300 hover:text-white',
  };

  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-5 text-sm',
    lg: 'h-12 px-6 text-base',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
      {Icon && <Icon className="ml-2 size-4" />}
    </button>
  );
};
