import React from 'react';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'caption'
  | 'balance'
  | 'sectionTitle'
  | 'actionLabel';

interface TypographyProps {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  className = '',
  as
}) => {
  const variantStyles: Record<Variant, string> = {
    h1: 'text-2xl font-bold tracking-tight text-[#1B2075]',
    h2: 'text-xl font-bold tracking-tight text-[#1B2075]',
    h3: 'text-base font-semibold text-[#1B2075]',
    body: 'text-sm text-slate-600',
    caption: 'text-xs text-slate-400 font-normal',
    balance: 'text-4xl sm:text-[42px] font-bold tracking-tight text-white font-sans drop-shadow-xs',
    sectionTitle: 'text-lg font-bold text-[#1B2075] tracking-tight',
    actionLabel: 'text-xs font-semibold text-[#1B2075] tracking-tight text-center',
  };

  const Component = as || (
    variant === 'h1' ? 'h1' :
    variant === 'h2' || variant === 'sectionTitle' ? 'h2' :
    variant === 'h3' ? 'h3' :
    variant === 'caption' ? 'span' : 'p'
  );

  return (
    <Component className={`${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
};
