import React from 'react';
import TabButton from '../../molecules/TabButton/TabButton';

export type TabType = 'ACCOUNT OPTIONS' | 'INVEST' | 'TRANSACTIONS';

interface NavigationTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs: TabType[] = ['ACCOUNT OPTIONS', 'INVEST', 'TRANSACTIONS'];

  return (
    <div className="bg-white">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-1.5 px-4">
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              label={tab}
              isActive={activeTab === tab}
              onClick={() => onTabChange(tab)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;

