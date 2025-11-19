import React, { useState } from 'react';
import Tag from '../../atoms/Tag/Tag';
import Text from '../../atoms/Text/Text';
import Icon from '../../atoms/Icon/Icon';

interface BalanceCardProps {
  balance: string;
  frequency: string;
  autoSaveAmount: string;
  tag?: {
    variant: 'gray' | 'green';
    name: string;
  };
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  balance,
  frequency,
  autoSaveAmount,
  tag = { variant: 'gray', name: 'Savings' },
}) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <div className="bg-white rounded-xl shadow-md px-5 py-3 flex-shrink-0 w-80 max-w-sm relative z-20">
      {tag && <Tag variant={tag.variant}>{tag.name}</Tag>}

      <div className="mb-2">
        <Text size="sm" color="primary" weight="bold" className="-mb-0.5 text-center">
          Balance
        </Text>
        <div className="flex items-center justify-center relative">
          <Text size="3xl" weight="bold" color="blue" className="text-primary">
            {isBalanceVisible ? balance : '••••••'}
          </Text>
          <button
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
            className="text-gray-500 hover:text-gray-700 absolute right-0"
          >
            <Icon
              name={isBalanceVisible ? 'eye-off' : 'eye'}
              stroke={'#004F71'}
            />
          </button>
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-600 mb-3 flex-wrap gap-1">
        <div>
          <Text size="2xs" weight='semibold' color="gray">
            Frequency: <span className='font-bold'>{frequency}</span>
          </Text>
        </div>
        <div>
          <Text size="2xs" weight="semibold" color="gray">
            AutoSave amount: <span className='font-bold'>{autoSaveAmount}</span>
          </Text>
        </div>
      </div>

      <div className="flex border-t border-gray-200 pt-2">
        <button className="flex-1 flex flex-col items-center pr-2">
          <Icon name="wallet" size={18} className="text-primary" />
          <Text size="sm" weight="bold" color="primary">
            Deposit
          </Text>
        </button>
         <div className="h-8 bg-accent w-[1.4px]"></div>
        <button className="flex-1 flex flex-col items-center pl-2">
          <Icon name="paper-plane" size={18} className="text-primary" />
          <Text size="sm" weight="bold" color="primary">
            Share Medical
          </Text>
        </button>
      </div>
    </div>
  );
};

export default BalanceCard;

