import React from 'react';
import { EnlaceLogo } from '../../atoms/Logo/EnlaceLogo';
import { Avatar } from '../../atoms/Avatar/Avatar';

interface HeaderBannerProps {
  userName?: string;
  userInitials?: string;
  onAvatarClick?: () => void;
  className?: string;
}

const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return 'Buenos días';
  } else if (hour >= 12 && hour < 19) {
    return 'Buenas tardes';
  } else {
    return 'Buenas noches';
  }
};

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  userName = 'Laura Martínez',
  userInitials = 'LM',
  onAvatarClick,
  className = ''
}) => {
  const greeting = getGreeting();

  return (
    <div className={`relative w-full h-[205px] sm:h-[205px] bg-[#363CB1] select-none text-white ${className}`}>
      {/* Fila superior: Logo y Avatar (ajustada para celulares y safe-area) */}
      <div className="flex items-center justify-between px-5 sm:px-6 pt-[calc(max(0.75rem,env(safe-area-inset-top))+0.5rem)] pb-4">
        <EnlaceLogo />
        <Avatar initials={userInitials} onClick={onAvatarClick} />
      </div>

      {/* Saludo dinámico según la hora y debajo el nombre de la persona */}
      <div className="flex flex-col items-center justify-center pb-10 pt-1 text-center px-4">
        <span className="text-sm sm:text-base font-normal text-blue-100/90 tracking-wide">
          {greeting}
        </span>
        <h1 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight font-sans mt-0.5">
          {userName}
        </h1>
      </div>


      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 500 48"
          preserveAspectRatio="none"
          className="relative block w-full h-7 sm:h-9 text-white fill-white"
        >

          <path d="M0,0 C150,46 350,46 500,0 L500,48 L0,48 Z" />
        </svg>
      </div>
    </div>
  );
};
