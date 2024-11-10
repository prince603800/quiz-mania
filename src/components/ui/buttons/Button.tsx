
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', disabled = false, className = '' }) => {
  const baseStyles = 'px-6 py-2 rounded font-medium';
  const variantStyles =
    variant === 'primary' ? 'bg-primary text-white hover:bg-primary' : 'border-[1px] border-primary text-primary';

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
