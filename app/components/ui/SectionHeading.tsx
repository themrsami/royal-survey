import { ReactNode } from 'react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: ReactNode;
  className?: string;
  badge?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  accent,
  className = '',
  badge,
}: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${centered ? styles.centered : ''} ${className}`}>
      {badge && <div className={styles.badge}>{badge}</div>}
      {accent && <div className={styles.accent}>{accent}</div>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
