// components/Button.tsx
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', disabled = false, className = '' }) => {
  const baseStyles = 'px-4 py-2 rounded font-semibold';
  const variantStyles =
    variant === 'primary' ? 'bg-primary text-white hover:bg-primary' : 'bg-gray-200 text-gray-700';

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
