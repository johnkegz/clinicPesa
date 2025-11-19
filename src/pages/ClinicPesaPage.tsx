import React from 'react';
import ClinicPesaLayout from '../components/templates/ClinicPesaLayout';

const ClinicPesaPage: React.FC = () => {
  const handleBack = () => {
    console.log('Back clicked');
  };

  const handleClose = () => {
    console.log('Close clicked');
  };


  return (
    <ClinicPesaLayout
      userName="Robert"
      onBack={handleBack}
      onClose={handleClose}
    />
  );
};

export default ClinicPesaPage;