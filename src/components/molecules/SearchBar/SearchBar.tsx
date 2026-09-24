import React from 'react';
import { Input } from '../../atoms/Input/Input';
import { Icon } from '../../atoms/Icon/Icon';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Buscar proveedor',
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        icon={<Icon name="search" size={20} className="text-slate-600" stroke={2.2} />}
      />
    </div>
  );
};
