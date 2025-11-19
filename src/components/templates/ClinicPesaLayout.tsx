import React from 'react';
import Header from '../organisms/Header';

interface ClinicPesaLayoutProps {
  userName: string;
  onBack?: () => void;
  onClose?: () => void;
  onTermsClick?: () => void;
}

const ClinicPesaLayout: React.FC<ClinicPesaLayoutProps> = ({
  userName,
  onBack,
  onClose,
}) => {
  return (
    <div>
      <Header userName={userName} onBack={onBack} onClose={onClose} />
    </div>
  );
};

export default ClinicPesaLayout;

