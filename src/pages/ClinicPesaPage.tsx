import React from 'react';
import ClinicPesaLayout from '../components/templates/ClinicPesaLayout';
import type { BalanceCardData } from '../components/organisms/BalanceSection/BalanceSection';

const ClinicPesaPage: React.FC = () => {
  const handleBack = () => {
    console.log('Back clicked');
  };

  const handleClose = () => {
    console.log('Close clicked');
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
      balanceCards={balanceCards}
    />
  );
};

export default ClinicPesaPage;