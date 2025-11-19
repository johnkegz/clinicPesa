import React from 'react';
import Text from '../../atoms/Text/Text';

interface FooterProps {
  onTermsClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onTermsClick }) => {
  return (
    <footer className="text-center py-6 px-4">
      <Text size="sm" color="gray" weight="bold">
        clinicPesa{' '}
        <button
          onClick={onTermsClick}
          className="text-primary hover:underline font-bold"
        >
          T&Cs
        </button>{' '}
        apply.
      </Text>
    </footer>
  );
};

export default Footer;

