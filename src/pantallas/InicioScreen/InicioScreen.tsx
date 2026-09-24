import React, { useState } from 'react';
import { HeaderBanner } from '../../components/organisms/HeaderBanner/HeaderBanner';
import { QuickActionsRow } from '../../components/organisms/QuickActionsRow/QuickActionsRow';
import { PendingInvoicesSection } from '../../components/organisms/PendingInvoicesSection/PendingInvoicesSection';
import { BottomNavigation, type TabType } from '../../components/organisms/BottomNavigation/BottomNavigation';
import { PagarFacturaScreen } from '../PagarFacturaScreen';
import type { InvoiceItemData } from '../../components/molecules/InvoiceCard/InvoiceCard';

export const InicioScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('inicio');
  const [userName] = useState('Laura Martínez');
  const [selectedInvoice, setSelectedInvoice] = useState<InvoiceItemData | null>(null);

  const handleMisLlaves = () => {
    console.log('Mis Llaves click');
  };

  const handleMisMovimientos = () => {
    console.log('Mis Movimientos click');
    setActiveTab('movimientos');
  };

  const handleInvoiceClick = (invoice: InvoiceItemData) => {
    setSelectedInvoice(invoice);
  };

  // Si se seleccionó una factura/comercio, mostrar el flujo de pago
  if (selectedInvoice) {
    return (
      <PagarFacturaScreen
        providerInvoice={selectedInvoice}
        onBackToHome={() => setSelectedInvoice(null)}
      />
    );
  }

  return (
    <div className="w-full min-h-dvh bg-white sm:bg-slate-100 flex justify-center items-start sm:py-6">
      {/* Marco de pantalla de teléfono móvil responsivo */}
      <div className="w-full max-w-[430px] min-h-dvh bg-white shadow-none sm:shadow-2xl relative flex flex-col pb-[calc(5rem+env(safe-area-inset-bottom))] overflow-x-hidden sm:rounded-3xl border-0 sm:border sm:border-slate-100">

        {/* Organismo 1: Banner Azul Superior Curvado con Logo, Avatar y Saludo */}
        <HeaderBanner
          userName={userName}
          userInitials="LM"
          onAvatarClick={() => alert(`Perfil: ${userName}`)}
        />

        {/* Organismo 2: Fila de Acciones Rápidas */}
        <QuickActionsRow
          onMisLlaves={handleMisLlaves}
          onMisMovimientos={handleMisMovimientos}
        />

        {/* Organismo 3: Sección de Facturas Pendientes con Buscador y Tarjetas */}
        <PendingInvoicesSection onInvoiceClick={handleInvoiceClick} />

        {/* Organismo 4: Barra de Navegación Inferior Fija */}
        <BottomNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
};
