import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';

  const variantStyles = {
    primary: 'bg-brand-orange hover:bg-opacity-90 text-white',
    secondary: 'bg-brand-navy hover:bg-opacity-90 text-white',
    outline: 'border-2 border-brand-navy dark:border-brand-blue text-brand-navy dark:text-brand-blue hover:bg-brand-navy hover:text-white dark:hover:bg-brand-blue dark:hover:text-brand-navy',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
