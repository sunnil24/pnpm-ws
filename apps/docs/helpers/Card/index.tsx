import React, { FC, useState } from 'react';

interface CardProps {
  href: string;
  title: string;
  description?: string;
  isExternalLink?: boolean;
}

export const Card: FC<CardProps> = ({
  description,
  href,
  isExternalLink = false,
  title,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const dynamicProps = isExternalLink
    ? {
        target: '_blank',
        rel: 'noreferrer',
      }
    : {};
  const a = 23;

  return (
    <a
      href={href}
      {...dynamicProps}
      className="no-underline hover:underline font-bold text-lg text-white max-w rounded-xl overflow-hidden shadow-lg transform w-100 p-4 cursor-pointer relative h-28 w-64 hover:-translate-y-2 bg-gradient transition-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
      {a}
      {description && (
        <div
          className={`duration-400 absolute bottom-0 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-white">{description}</p>
        </div>
      )}
    </a>
  );
};
