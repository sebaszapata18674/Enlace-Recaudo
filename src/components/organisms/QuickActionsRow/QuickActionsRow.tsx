import React from 'react';
import { QuickActionButton } from '../../molecules/QuickActionButton/QuickActionButton';

interface QuickActionsRowProps {
  onMisLlaves?: () => void;
  onMisMovimientos?: () => void;
  className?: string;
}

export const QuickActionsRow: React.FC<QuickActionsRowProps> = ({
  onMisLlaves,
  onMisMovimientos,
  className = ''
}) => {
  return (
    <div
      className={`w-full flex items-center justify-center gap-8 sm:gap-12 px-4 pt-4 pb-2 bg-white ${className}`}
    >
      <QuickActionButton
        label="Mis Llaves"
        iconName="key"
        onClick={onMisLlaves}
      />
      <QuickActionButton
        label="Mis Movimientos"
        iconName="receipt"
        onClick={onMisMovimientos}
      />
    </div>
  );
};
