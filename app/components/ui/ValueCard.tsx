import { 
  Target, 
  Shield, 
  Users, 
  Clock, 
  Handshake, 
  Heart, 
  Zap, 
  FileCheck 
} from 'lucide-react';
import styles from './ValueCard.module.css';

// Map icon names to Lucide components
const ICON_MAP = {
  Target,
  Shield,
  Users,
  Clock,
  Handshake,
  Heart,
  Zap,
  FileCheck,
} as const;

type IconName = keyof typeof ICON_MAP;

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ValueCard({ title, description, icon }: ValueCardProps) {
  const IconComponent = ICON_MAP[icon as IconName] || Target;

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <IconComponent size={28} className={styles.icon} />
      </div>
      
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
