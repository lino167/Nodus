import React from 'react';
import { cn } from '../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
  placeholder?: string;
  type?: string;
  value?: any;
  onChange?: (e: any) => void;
  required?: boolean;
}

export const Input = ({ className, label, error, icon, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-slate-400 text-xs font-mono uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && <div className="absolute left-4 text-slate-500">{icon}</div>}
        <input
          className={cn(
            'w-full bg-[#0B0F14] border border-[#243041] text-white text-sm rounded-lg focus:ring-1 focus:ring-[#00F0FF] focus:border-[#00F0FF] block p-3.5 transition-colors placeholder:text-slate-600',
            icon && 'pl-12',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
      </div>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};
