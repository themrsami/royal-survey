import { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
}

export default function Container({
  children,
  size = 'lg',
  className = '',
}: ContainerProps) {
  return (
    <div className={`${styles.container} ${styles[size]} ${className}`}>
      {children}
    </div>
  );
}
