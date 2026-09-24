import React, { useState, useMemo } from 'react';
import { Typography } from '../../atoms/Typography/Typography';
import { SearchBar } from '../../molecules/SearchBar/SearchBar';
import { InvoiceCard, type InvoiceItemData } from '../../molecules/InvoiceCard/InvoiceCard';

const INITIAL_INVOICES: InvoiceItemData[] = [
  {
    id: 'alpina-1',
    providerName: 'Alpina Productos...',
    providerLogo: '/Alpina.png',
    invoiceCount: 3,
    totalBalance: '$345,678',
    logoBg: 'bg-white',
  },
  {
    id: 'nutresa-2',
    providerName: 'Nutresa S.A.',
    providerLogo: '/Nutresa.png',
    invoiceCount: 5,
    totalBalance: '$563,894',
    logoBg: 'bg-white',
  },
  {
    id: 'postobon-3',
    providerName: 'Postobón S.A.',
    providerLogo: '/postobon.svg',
    invoiceCount: 2,
    totalBalance: '$463.765',
    logoBg: 'bg-white',
  }
];

interface PendingInvoicesSectionProps {
  invoices?: InvoiceItemData[];
  onInvoiceClick?: (invoice: InvoiceItemData) => void;
  className?: string;
}

export const PendingInvoicesSection: React.FC<PendingInvoicesSectionProps> = ({
  invoices = INITIAL_INVOICES,
  onInvoiceClick,
  className = ''
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInvoices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return invoices;
    return invoices.filter((inv) =>
      inv.providerName.toLowerCase().includes(query)
    );
  }, [invoices, searchQuery]);

  return (
    <section className={`w-full px-5 py-4 flex flex-col gap-3.5 ${className}`}>
      {/* Título de la sección */}
      <Typography variant="sectionTitle" className="text-[19px] font-bold text-[#1B2075]">
        Facturas Pendientes
      </Typography>

      {/* Barra de búsqueda */}
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Buscar proveedor"
      />

      {/* Lista de tarjetas de facturas pendientes */}
      <div className="flex flex-col gap-3 mt-1">
        {filteredInvoices.length > 0 ? (
          filteredInvoices.map((invoice) => (
            <InvoiceCard
              key={invoice.id}
              data={invoice}
              onClick={onInvoiceClick}
            />
          ))
        ) : (
          <div className="text-center py-8 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-500 font-medium">
              No se encontraron proveedores que coincidan con "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
