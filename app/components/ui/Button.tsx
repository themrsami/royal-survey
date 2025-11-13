import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  external = false,
}: ButtonProps) {
  const classNames = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classNames} target="_blank" rel="noopener noreferrer">
          {icon && <span className={styles.icon}>{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={classNames}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classNames}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
