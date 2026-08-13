import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

interface AvatarProps {
  className?: string;
  alt?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ className, alt }) => {
  const [src, setSrc] = useState(personalInfo.avatarFallback);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setSrc(personalInfo.avatar);
    image.src = personalInfo.avatar;
  }, []);

  return (
    <img
      src={src}
      alt={alt ?? personalInfo.name}
      className={className}
    />
  );
};
