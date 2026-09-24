import React from 'react';

interface EnlaceLogoProps {
  className?: string;
  alt?: string;
}

export const EnlaceLogo: React.FC<EnlaceLogoProps> = ({
  className = '',
  alt = 'Enlace CRM'
}) => {
  return (
    <img
      src="/enlacelogo.png"
      alt={alt}
      className={`h-[22px] sm:h-[24px] w-auto max-w-[110px] sm:max-w-[125px] object-contain select-none ${className}`}
    />
  );
};
