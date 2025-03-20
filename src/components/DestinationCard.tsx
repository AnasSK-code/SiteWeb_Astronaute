
import React from 'react';

interface DestinationCardProps {
  title: string;
  description: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ title, description }) => {
  return (
    <div className="destination-card p-6 bg-card/30 border border-white/10 backdrop-blur-sm h-[180px]">
      <div className="space-y-4">
        <h3 className="font-serif uppercase text-lg tracking-wider">{title}</h3>
        <p className="text-sm text-white/70 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
