
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="SecureX Lab" 
      className={`${className} w-auto object-contain`} 
    />
  );
};

export default Logo;
