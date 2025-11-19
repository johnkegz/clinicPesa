import React, { useState } from 'react';
import ClinicPesaLayout from '../components/templates/ClinicPesaLayout';
import type { BalanceCardData } from '../components/organisms/BalanceSection/BalanceSection';
import type { TabType } from '../components/organisms/NavigationTabs/NavigationTabs';

const ClinicPesaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('ACCOUNT OPTIONS');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const handleBack = () => {
    // TODO: Implement back navigation
  };

  const handleClose = () => {
    // TODO: Implement close action
  };

  const handleTermsClick = () => {
    // TODO: Implement terms and conditions navigation
  };

  const balanceCards: BalanceCardData[] = [
    {
      balance: 'UGX 50,000',
      frequency: 'Monthly',
      autoSaveAmount: 'UGX 1,000',
      tag: {
        variant: 'gray',
        name: 'Savings',
      },
    },
    {
      balance: '......',
      frequency: '.....',
      autoSaveAmount: '.....',
      tag: {
        variant: 'green',
        name: 'Loans',
      },
    },
    {
      balance: '......',
      frequency: '.....',
      autoSaveAmount: '.....',
      tag: {
        variant: 'gray',
        name: 'Investment',
      },
    },
  ];


  return (
    <ClinicPesaLayout
      userName="Robert"
      onBack={handleBack}
      onClose={handleClose}
      onTermsClick={handleTermsClick}
      balanceCards={balanceCards}
      activeTab={activeTab}
      onTabChange={handleTabChange}
    />
  );
};

export default ClinicPesaPage;