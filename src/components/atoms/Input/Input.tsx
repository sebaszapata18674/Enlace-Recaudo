import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  wrapperClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  icon,
  wrapperClassName = '',
  className = '',
  ...props
}) => {
  return (
    <div className={`relative flex items-center w-full ${wrapperClassName}`}>
      {icon && (
        <div className="absolute left-3.5 flex items-center pointer-events-none text-slate-500">
          {icon}
        </div>
      )}
      <input
        className={`w-full bg-[#f3f4f6] text-[#1B2075] placeholder-slate-400 text-base sm:text-sm rounded-xl py-3 transition-all duration-200 outline-none focus:bg-white focus:ring-2 focus:ring-[#363CB1]/20 border border-transparent focus:border-[#363CB1]/30 ${
          icon ? 'pl-11 pr-4' : 'px-4'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
