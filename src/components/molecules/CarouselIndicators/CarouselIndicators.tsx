import React from 'react';

interface CarouselIndicatorsProps {
  total: number;
  active: number;
}

export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ total, active }) => {
  return (
    <div className="flex justify-center gap-3 pt-2 pb-4">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-1 rounded-full transition-all ${
            index === active ? 'bg-accent w-5' : 'bg-gray-300 w-1'
          }`}
        />
      ))}
    </div>
  );
};

