import React from 'react';
import Header from '../organisms/Header';
import BalanceSection, { type BalanceCardData } from '../organisms/BalanceSection/BalanceSection';
import type { TabType } from '../organisms/NavigationTabs/NavigationTabs';
import NavigationTabs from '../organisms/NavigationTabs/NavigationTabs';
import AccountOptionsGrid from '../organisms/AccountOptionsGrid/AccountOptionsGrid';
import Footer from '../organisms/Footer/Footer';

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
  onTermsClick
}) => {
  const accountOptions = [
    {
      icon: 'document-dollar' as const,
      label: 'Pay Medical Bill',
      onClick: () => {
        // TODO: Implement Pay Medical Bill action
      },
      strokeWidth: 1.4,
    },
    {
      icon: 'hand-dollar' as const,
      label: 'Get Loan',
      onClick: () => {
        // TODO: Implement Get Loan action
      },
      strokeWidth: 15,
    },
    {
      icon: 'users' as const,
      label: 'Join MaMas',
      onClick: () => {
        // TODO: Implement Join MaMas action
      },
      strokeWidth: 20,
    },
    {
      icon: 'check-circle' as const,
      label: 'My Approvals',
      onClick: () => {
        // TODO: Implement My Approvals action
      },
      strokeWidth: 20,
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
      <Footer onTermsClick={onTermsClick} />
    </div>
  );
};

export default ClinicPesaLayout;

