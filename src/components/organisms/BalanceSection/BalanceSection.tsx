import React, { useState, useRef, useEffect } from 'react';
import BalanceCard from '../../molecules/BalanceCard/BalanceCard';
import { CarouselIndicators } from '../../molecules/CarouselIndicators/CarouselIndicators';

export interface BalanceCardData {
  balance: string;
  frequency: string;
  autoSaveAmount: string;
  tag?: {
    variant: 'gray' | 'green';
    name: string;
  };
}

interface BalanceSectionProps {
  cards: BalanceCardData[];
}

const BalanceSection: React.FC<BalanceSectionProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((cardRef, index) => {
        if (cardRef) {
          const cardRect = cardRef.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distance = Math.abs(containerCenter - cardCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [cards.length]);

  return (
    <section className="bg-white">
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto pb-2 scrollbar-hide"
      >
        <div className="flex gap-4 px-6">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <BalanceCard
                balance={card.balance}
                frequency={card.frequency}
                autoSaveAmount={card.autoSaveAmount}
                tag={card.tag}
              />
            </div>
          ))}
        </div>
      </div>
      <CarouselIndicators total={cards.length} active={activeIndex} />
    </section>
  );
};

export default BalanceSection;

