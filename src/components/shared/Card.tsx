import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover
    ? 'transition-transform duration-300 hover:scale-105 hover:shadow-xl'
    : '';

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
