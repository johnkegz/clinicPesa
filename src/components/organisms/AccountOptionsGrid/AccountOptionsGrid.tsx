import React from 'react';
import OptionCard from '../../molecules/OptionCard/OptionCard';

interface AccountOption {
  icon: 'document-dollar' | 'hand-dollar' | 'users' | 'check-circle';
  label: string;
  onClick?: () => void;
  strokeWidth: number
}

interface AccountOptionsGridProps {
  options: AccountOption[];
}

const AccountOptionsGrid: React.FC<AccountOptionsGridProps> = ({ options }) => {
  return (
    <div className="pt-4 px-6 grid grid-cols-2 gap-4">
      {options.map((option, index) => (
        <OptionCard
          key={index}
          icon={option.icon}
          label={option.label}
          onClick={option.onClick}
          strokeWidth={option.strokeWidth}
        />
      ))}
    </div>
  );
};

export default AccountOptionsGrid;

