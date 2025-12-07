import type { ButtonProps } from './types';
import './button.css';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex flex-row items-center justify-center min-w-btn px-3 rounded font-medium transition-colors font-sans text-minimum gap-btn-gap'

  const sizeStyles: Record<string, string> = {
    md: 'h-btn-md w-btn-md',
    sm: 'h-btn-sm w-btn-sm',
  };

  const variantStyles: Record<string, string> = {
    primary: 'bg-primary text-white hover:bg-primary-hover active:bg-primary-pressed disabled:opacity-50',
    secondary: 'bg-secondary border-2 border-primary text-primary hover:bg-secondary-hover active:bg-secondary-pressed disabled:opacity-50',
    normal: 'bg-normal text-white hover:bg-normal-hover active:bg-normal-pressed disabled:opacity-50',
  };

  const styles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button className={styles} disabled={disabled} {...props}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {icon ? <span>{children}</span> : children}
    </button>
  );
}

export default Button;
