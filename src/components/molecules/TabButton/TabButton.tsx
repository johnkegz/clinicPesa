import React from 'react';
import Text from '../../atoms/Text/Text';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative pb-3 px-4 transition-colors whitespace-nowrap mb-2"
    >
      <Text
        size="sm"
        weight={'extrabold'}
        color={isActive ? 'primary' : 'lightGray'}
        lineHeight="none"
      >
        {label}
      </Text>
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent mx-4 rounded-t-full" />
      )}
    </button>
  );
};

export default TabButton;

