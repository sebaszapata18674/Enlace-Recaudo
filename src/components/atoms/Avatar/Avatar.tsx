import React from 'react';

interface AvatarProps {
  initials?: string;
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  initials = 'LM',
  src,
  alt = 'Usuario',
  size = 'md',
  onClick,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  }[size];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full border-2 border-white/70 bg-white/10 backdrop-blur-xs text-white font-semibold shadow-xs hover:bg-white/20 active:scale-95 transition-all duration-200 cursor-pointer overflow-hidden ${sizeClasses} ${className}`}
      aria-label="Perfil de usuario"
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </button>
  );
};
