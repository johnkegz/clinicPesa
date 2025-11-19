import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import Text from '../../atoms/Text/Text';

interface OptionCardProps {
  icon: 'document-dollar' | 'hand-dollar' | 'users' | 'check-circle';
  label: string;
  onClick?: () => void;
  strokeWidth: number;
}

const OptionCard: React.FC<OptionCardProps> = ({ icon, label, onClick, strokeWidth }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl shadow-md p-2 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow w-full"
    >
      <Icon name={icon} size={30} className="text-primary" stroke='#004F71' strokeWidth={strokeWidth} />
      <Text size="xs" weight="semibold" color="gray" className="text-center">
        {label}
      </Text>
    </button>
  );
};

export default OptionCard;

