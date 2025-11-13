'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { 
  Navigation, 
  Satellite, 
  Activity, 
  ScanLine, 
  PenTool, 
  Globe,
  CheckCircle,
  Wrench
} from 'lucide-react';
import styles from './EquipmentDetail.module.css';

interface EquipmentDetailProps {
  equipment: {
    id: string;
    name: string;
    description: string;
  };
}

// Equipment data with extended details
const EQUIPMENT_DATA: Record<string, {
  icon: string;
  specifications: string[];
  useCases: string[];
  benefits: string[];
}> = {
  'total-station': {
    icon: 'Navigation',
    specifications: [
      'High-precision angle and distance measurement',
      'Electronic distance meter (EDM) technology',
      'Data storage and transfer capabilities',
      'Reflectorless measurement up to 1000m'
    ],
    useCases: [
      'Construction layout and as-built surveys',
      'Topographic mapping and contouring',
      'Building and infrastructure monitoring',
      'Volume calculations and earthwork analysis'
    ],
    benefits: [
      'Millimeter-level accuracy for critical measurements',
      'Rapid data collection and processing',
      'Versatile for various surveying applications',
      'Seamless integration with CAD software'
    ]
  },
  'gps-gnss': {
    icon: 'Satellite',
    specifications: [
      'Multi-constellation GNSS support (GPS, GLONASS, Galileo, BeiDou)',
      'Real-time kinematic (RTK) positioning',
      'Centimeter-level accuracy',
      'Long battery life and rugged design'
    ],
    useCases: [
      'Large-area topographic surveys',
      'Cadastral and boundary surveys',
      'GIS data collection and mapping',
      'Construction control and machine guidance'
    ],
    benefits: [
      'Fast and efficient data acquisition',
      'Works in challenging terrain and conditions',
      'High productivity with minimal setup',
      'Accurate georeferencing for all data'
    ]
  },
  'automatic-level': {
    icon: 'Activity',
    specifications: [
      'Automatic self-leveling compensator',
      'High magnification optical system',
      'Digital reading and data recording',
      'Weather-resistant construction'
    ],
    useCases: [
      'Differential leveling for elevation control',
      'Foundation and floor level surveys',
      'Road and railway profile measurements',
      'Dam and embankment monitoring'
    ],
    benefits: [
      'Precise vertical measurements',
      'Quick setup and operation',
      'Reliable performance in field conditions',
      'Cost-effective solution for leveling work'
    ]
  },
  'cable-detector': {
    icon: 'ScanLine',
    specifications: [
      'Multi-frequency detection system',
      'Active and passive detection modes',
      'Depth estimation capabilities',
      'GPS integration for utility mapping'
    ],
    useCases: [
      'Pre-construction utility investigations',
      'Underground cable and pipe location',
      'Utility mapping and GIS database creation',
      'Safety verification before excavation'
    ],
    benefits: [
      'Prevents costly utility strikes',
      'Ensures worker and public safety',
      'Accurate utility mapping for planning',
      'Reduces project delays and risks'
    ]
  },
  'autocad-software': {
    icon: 'PenTool',
    specifications: [
      'Industry-standard CAD platform',
      'Civil 3D for infrastructure design',
      '3D modeling and visualization',
      'Extensive surveying and design tools'
    ],
    useCases: [
      'Survey data processing and drafting',
      'Site plans and construction drawings',
      'Road and grading design',
      'Volume calculations and cut-fill analysis'
    ],
    benefits: [
      'Professional deliverables and reports',
      'Efficient data processing workflow',
      'Compatible with client requirements',
      'Powerful design and analysis capabilities'
    ]
  },
  'gis-software': {
    icon: 'Globe',
    specifications: [
      'Advanced spatial analysis tools',
      'Multi-layer data management',
      'Web-based mapping and sharing',
      'Integration with GPS and survey data'
    ],
    useCases: [
      'Asset management and inventory',
      'Urban planning and development',
      'Environmental and resource mapping',
      'Infrastructure network analysis'
    ],
    benefits: [
      'Comprehensive spatial data management',
      'Powerful analysis and visualization',
      'Data sharing and collaboration tools',
      'Decision support for planning'
    ]
  }
};

const iconMap = {
  Navigation,
  Satellite,
  Activity,
  ScanLine,
  PenTool,
  Globe
};

export default function EquipmentDetail({ equipment }: EquipmentDetailProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const data = EQUIPMENT_DATA[equipment.id];
  const IconComponent = iconMap[data.icon as keyof typeof iconMap];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.imageSection}>
        <Image
          src={`/images/equipment/${equipment.id}.webp`}
          alt={equipment.name}
          width={600}
          height={400}
          className={styles.image}
        />
        <div className={styles.iconWrapper}>
          <IconComponent className={styles.icon} size={32} />
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{equipment.name}</h3>
        <p className={styles.description}>{equipment.description}</p>

        <div className={styles.detailsSection}>
          <div className={styles.detailBlock}>
            <div className={styles.detailHeader}>
              <CheckCircle className={styles.detailIcon} size={20} />
              <h4 className={styles.detailTitle}>Specifications</h4>
            </div>
            <ul className={styles.detailList}>
              {data.specifications.map((spec, index) => (
                <li key={index} className={styles.detailItem}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <div className={styles.detailHeader}>
              <Wrench className={styles.detailIcon} size={20} />
              <h4 className={styles.detailTitle}>Use Cases</h4>
            </div>
            <ul className={styles.detailList}>
              {data.useCases.map((useCase, index) => (
                <li key={index} className={styles.detailItem}>{useCase}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <div className={styles.detailHeader}>
              <CheckCircle className={styles.detailIcon} size={20} />
              <h4 className={styles.detailTitle}>Key Benefits</h4>
            </div>
            <ul className={styles.detailList}>
              {data.benefits.map((benefit, index) => (
                <li key={index} className={styles.detailItem}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
