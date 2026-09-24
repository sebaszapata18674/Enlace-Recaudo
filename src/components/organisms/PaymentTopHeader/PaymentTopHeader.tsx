import React from 'react';
import { Icon } from '../../atoms/Icon/Icon';

interface PaymentTopHeaderProps {
  title?: string;
  onBack: () => void;
  className?: string;
}

export const PaymentTopHeader: React.FC<PaymentTopHeaderProps> = ({
  title = 'Pagar  Factura',
  onBack,
  className = ''
}) => {
  return (
    <header
      className={`w-full bg-[#2F399B] text-white px-4 sm:px-5 py-3.5 flex items-center justify-between shadow-xs select-none sticky top-0 z-20 ${className}`}
    >
      {/* Botón circular Volver */}
      <button
        type="button"
        onClick={onBack}
        aria-label="Volver"
        className="w-8 h-8 rounded-full border border-white/90 flex items-center justify-center text-white hover:bg-white/15 active:scale-95 transition-all cursor-pointer shrink-0"
      >
        <Icon name="arrow-left" size={18} stroke={2.5} />
      </button>

      {/* Título centrado */}
      <h2 className="text-base sm:text-lg font-bold text-white tracking-wide text-center truncate px-2">
        {title}
      </h2>

      {/* Espaciador simétrico para centrar el título */}
      <div className="w-8 shrink-0 pointer-events-none" />
    </header>
  );
};
