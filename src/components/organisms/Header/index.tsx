import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import Text from '../../atoms/Text/Text';

interface HeaderProps {
  userName: string;
  greeting?: string;
  onBack?: () => void;
  onClose?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  userName,
  greeting = 'Good Morning',
  onBack,
  onClose,
}) => {
  return (<>
    <header className="bg-gradient-to-b from-primary-light to-primary text-white px-6 pt-6 pb-6 z-10">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-primary-light rounded-lg transition-colors"
        >
          <Icon name="arrow-left" size={28} fill="#FFCB03" stroke="#FFCB03" strokeWidth={0} />
        </button>
        <Text size="lg" weight="bold" color="white">
          clinicPesa
        </Text>
        <button
          onClick={onClose}
          className="p-2 hover:bg-primary-light rounded-lg transition-colors"
        >
          <Icon name="close" size={24} stroke="#FFCB03" />
        </button>
      </div>
      <div className="text-center">
        <Text size="xs" color="white" weight="bold">
          {greeting}, {userName}
        </Text>
      </div>
      
    </header>
    <div className="flex z-10">
      <div className="w-1/2 h-5 rounded-bl-[100%] bg-primary"></div>
      <div className="w-1/2 h-5 rounded-br-[100%] bg-primary"></div>
    </div>
    </>
  );
};

export default Header;

