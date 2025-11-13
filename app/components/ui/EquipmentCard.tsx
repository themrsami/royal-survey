import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import styles from './EquipmentCard.module.css';

interface EquipmentCardProps {
  name: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export default function EquipmentCard({ name, description, image, icon: Icon }: EquipmentCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={name}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className={styles.overlay} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Icon size={24} className={styles.icon} />
        </div>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
