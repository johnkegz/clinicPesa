import React from 'react';
import Header from '../organisms/Header';
import BalanceSection, { type BalanceCardData } from '../organisms/BalanceSection/BalanceSection';

interface ClinicPesaLayoutProps {
  userName: string;
  onBack?: () => void;
  onClose?: () => void;
  onTermsClick?: () => void;
  balanceCards: BalanceCardData[];
}

const ClinicPesaLayout: React.FC<ClinicPesaLayoutProps> = ({
  userName,
  onBack,
  onClose,
  balanceCards,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header userName={userName} onBack={onBack} onClose={onClose} />
      <div className="flex-1 -mt-8">
      <BalanceSection cards={balanceCards} />
      </div>
    </div>
  );
};

export default ClinicPesaLayout;

