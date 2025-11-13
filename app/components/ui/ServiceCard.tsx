import Link from 'next/link';
import { 
  Mountain, 
  Layers, 
  MapPin, 
  Home, 
  Target, 
  Box, 
  Waves,
  ArrowRight 
} from 'lucide-react';
import styles from './ServiceCard.module.css';

// Map icon names to Lucide components
const ICON_MAP = {
  Mountain,
  Layers,
  MapPin,
  Home,
  Target,
  Box,
  Waves,
} as const;

type IconName = keyof typeof ICON_MAP;

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export default function ServiceCard({ title, description, icon, slug }: ServiceCardProps) {
  const IconComponent = ICON_MAP[icon as IconName] || Target;

  return (
    <Link href={`/services/${slug}`} className={styles.card}>
      <div className={styles.iconWrapper}>
        <IconComponent size={32} className={styles.icon} />
      </div>
      
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      <div className={styles.learnMore}>
        <span>Learn More</span>
        <ArrowRight size={16} className={styles.arrow} />
      </div>
    </Link>
  );
}
