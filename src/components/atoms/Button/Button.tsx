import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'circle';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const variantStyles = {
    primary: 'bg-[#363CB1] hover:bg-[#292e94] text-white rounded-xl shadow-xs',
    secondary: 'bg-[#eef0fc] hover:bg-[#e1e5f8] text-[#363CB1] rounded-xl',
    ghost: 'bg-transparent hover:bg-slate-100 text-[#1B2075] rounded-xl',
    circle: 'rounded-full bg-[#eef0fc] text-[#363CB1] hover:bg-[#e1e5f8] shadow-2xs',
  }[variant];

  const sizeStyles = {
    sm: 'p-2 text-xs',
    md: variant === 'circle' ? 'w-14 h-14' : 'px-4 py-2.5 text-sm',
    lg: variant === 'circle' ? 'w-16 h-16' : 'px-6 py-3.5 text-base',
  }[size];

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
