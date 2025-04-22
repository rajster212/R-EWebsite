import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const baseStyles = 'font-medium transition-all duration-300 focus:outline-none rounded';
  
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow hover:shadow-md',
    secondary: 'bg-navy-700 hover:bg-navy-800 text-white shadow hover:shadow-md',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    text: 'text-blue-600 hover:bg-blue-50 hover:underline',
  };
  
  const sizeStyles = {
    sm: 'text-xs py-2 px-3',
    md: 'text-sm py-2 px-4',
    lg: 'text-base py-3 px-6',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;