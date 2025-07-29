import React from 'react';
import Icon from '@/components/ui/icon';

interface MagicalStarsProps {
  count?: number;
}

const MagicalStars: React.FC<MagicalStarsProps> = ({ count = 20 }) => {
  const stars = Array.from({ length: count }, (_, index) => {
    const size = Math.random() * 12 + 8; // 8-20px
    const left = Math.random() * 100; // 0-100%
    const animationDuration = Math.random() * 3 + 2; // 2-5s
    const animationDelay = Math.random() * 5; // 0-5s
    const opacity = Math.random() * 0.4 + 0.2; // 0.2-0.6
    const icons = ['Star', 'Sparkles', 'Zap'];
    const iconName = icons[Math.floor(Math.random() * icons.length)];

    return (
      <div
        key={index}
        className="absolute text-magical-gold animate-float"
        style={{
          left: `${left}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
          opacity: opacity,
        }}
      >
        <Icon name={iconName as any} size={size} />
      </div>
    );
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars}
    </div>
  );
};

export default MagicalStars;