import React from 'react';
import Header from '../organisms/Header';
import BalanceSection, { type BalanceCardData } from '../organisms/BalanceSection/BalanceSection';
import type { TabType } from '../organisms/NavigationTabs/NavigationTabs';
import NavigationTabs from '../organisms/NavigationTabs/NavigationTabs';
import AccountOptionsGrid from '../organisms/AccountOptionsGrid/AccountOptionsGrid';

interface ClinicPesaLayoutProps {
  userName: string;
  onBack?: () => void;
  onClose?: () => void;
  onTermsClick?: () => void;
  balanceCards: BalanceCardData[];
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const ClinicPesaLayout: React.FC<ClinicPesaLayoutProps> = ({
  userName,
  onBack,
  onClose,
  balanceCards,
  activeTab,
  onTabChange,
}) => {
  const accountOptions = [
    {
      icon: 'document-dollar' as const,
      label: 'Pay Medical Bill',
      onClick: () => console.log('Pay Medical Bill clicked'),
    },
    {
      icon: 'hand-dollar' as const,
      label: 'Get Loan',
      onClick: () => console.log('Get Loan clicked'),
    },
    {
      icon: 'users' as const,
      label: 'Join MaMas',
      onClick: () => console.log('Join MaMas clicked'),
    },
    {
      icon: 'check-circle' as const,
      label: 'My Approvals',
      onClick: () => console.log('My Approvals clicked'),
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-background-paper">
      <Header userName={userName} onBack={onBack} onClose={onClose} />
      <div className="flex-1 -mt-8">
      <BalanceSection cards={balanceCards} />
      <NavigationTabs activeTab={activeTab} onTabChange={onTabChange} />
      {activeTab === 'ACCOUNT OPTIONS' && (
          <AccountOptionsGrid options={accountOptions} />
        )}
      </div>
    </div>
  );
};

export default ClinicPesaLayout;

