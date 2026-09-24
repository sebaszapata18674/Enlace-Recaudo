import React from 'react';
import { Icon } from '../../atoms/Icon/Icon';

export interface InvoiceDetail {
  id: string;
  invoiceNumber: string;
  amount: string;
  numericAmount: number;
}

interface InvoiceDetailCardProps {
  invoice: InvoiceDetail;
  onClick: (invoice: InvoiceDetail) => void;
  className?: string;
}

export const InvoiceDetailCard: React.FC<InvoiceDetailCardProps> = ({
  invoice,
  onClick,
  className = ''
}) => {
  return (
    <div
      onClick={() => onClick(invoice)}
      className={`bg-white rounded-2xl p-4 sm:p-5 flex items-center justify-between border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-slate-200 transition-all duration-200 cursor-pointer active:scale-[0.99] select-none ${className}`}
    >
      {/* Lado izquierdo: No. Factura */}
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
          No. Factura
        </span>
        <span className="text-xs sm:text-sm font-medium text-slate-700 mt-0.5">
          {invoice.invoiceNumber}
        </span>
      </div>

      {/* Lado derecho: Saldo Total y Chevron */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="flex flex-col items-end text-right">
          <span className="text-[11px] text-slate-400 font-normal leading-none">
            Saldo Total
          </span>
          <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-snug mt-1">
            {invoice.amount}
          </span>
        </div>
        <div className="text-[#1B2075] shrink-0">
          <Icon name="chevron-right" size={20} stroke={2.5} />
        </div>
      </div>
    </div>
  );
};
