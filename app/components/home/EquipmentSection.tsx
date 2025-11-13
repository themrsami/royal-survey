'use client';

import { EQUIPMENT } from '@/app/lib/constants';
import Container from '@/app/components/ui/Container';
import SectionHeading from '@/app/components/ui/SectionHeading';
import EquipmentCard from '@/app/components/ui/EquipmentCard';
import Button from '@/app/components/ui/Button';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import { 
  Navigation, 
  Satellite, 
  Activity, 
  ScanLine, 
  PenTool, 
  Globe 
} from 'lucide-react';
import styles from './EquipmentSection.module.css';

// Map equipment IDs to icons and images
const EQUIPMENT_CONFIG = {
  'total-station': {
    icon: Navigation,
    image: '/images/equipment/total-station.webp',
  },
  'gps-gnss': {
    icon: Satellite,
    image: '/images/equipment/gps-gnss.webp',
  },
  'automatic-level': {
    icon: Activity,
    image: '/images/equipment/automatic-level.webp',
  },
  'cable-detector': {
    icon: ScanLine,
    image: '/images/equipment/cable-detector.webp',
  },
  'autocad-software': {
    icon: PenTool,
    image: '/images/equipment/autocad-software.webp',
  },
  'gis-software': {
    icon: Globe,
    image: '/images/equipment/gis-software.webp',
  },
} as const;

export default function EquipmentSection() {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={elementRef} className={`${styles.equipment} ${isVisible ? styles.visible : ''}`}>
      <Container>
        <SectionHeading
          badge="Our Equipment"
          title="Advanced Technology & Tools"
          subtitle="We utilize state-of-the-art surveying equipment and software to ensure the highest level of accuracy and efficiency in every project."
          centered
        />

        <div className={styles.grid}>
          {EQUIPMENT.map((item) => {
            const config = EQUIPMENT_CONFIG[item.id as keyof typeof EQUIPMENT_CONFIG];
            return (
              <EquipmentCard
                key={item.id}
                name={item.name}
                description={item.description}
                image={config.image}
                icon={config.icon}
              />
            );
          })}
        </div>

        <div className={styles.cta}>
          <Button variant="primary" size="lg" href="/equipment">
            View All Equipment
          </Button>
        </div>
      </Container>
    </section>
  );
}
