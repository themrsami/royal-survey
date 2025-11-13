'use client';

import { useEffect, useRef, useState } from 'react';
import {
  CheckCircle,
  Mountain,
  Layers,
  MapPin,
  Home as HomeIcon,
  Target,
  Box,
  Waves,
  Navigation,
  Satellite,
  Activity,
  ScanLine,
} from 'lucide-react';
import Container from '@/app/components/ui/Container';
import styles from './ServiceContent.module.css';

const ICON_MAP = {
  Mountain,
  Layers,
  MapPin,
  Home: HomeIcon,
  Target,
  Box,
  Waves,
  Navigation,
  Satellite,
  Activity,
  ScanLine,
} as const;

const SERVICE_DATA = {
  'topographic-survey': {
    overview:
      'At Royal Survey, our Topographic Survey services offer comprehensive and detailed mapping of land features essential for accurate site planning and engineering design. We capture and represent physical features of the terrain, crucial in understanding surface conditions, slopes, drainage patterns, and landform variations.',
    features: [
      'Spot Elevations mapping',
      'Contour line generation',
      'Natural and Man-made Landmarks identification',
      'Surface condition analysis',
      'Slope and drainage pattern assessment',
      'Landform variation documentation',
    ],
    process: [
      'Site reconnaissance and planning',
      'Data collection using GPS and Total Stations',
      'Field measurements and observations',
      'CAD processing and map generation',
      'Quality assurance and verification',
      'Delivery of precise topographic maps',
    ],
    equipment: ['Navigation', 'Satellite', 'Activity'],
    equipmentNames: ['Total Station', 'GPS/GNSS Systems', 'AutoCAD & Civil 3D'],
  },
  'underground-utilities': {
    overview:
      'Our Underground Utility Detection Survey services are designed to accurately identify and map subsurface utility infrastructure, enabling safer and more efficient project planning. This survey provides critical information about the type and location of underground utilities, allowing clients to create a comprehensive utility map.',
    features: [
      'Reduce project planning time',
      'Minimize costly design changes',
      'Prevent construction delays and hazards',
      'Enhance on-site safety compliance',
      'Metallic fuel pipes detection',
      'Electrical cables location',
      'Metallic gas pipelines mapping',
    ],
    process: [
      'Site assessment and planning',
      'Equipment deployment and calibration',
      'Systematic subsurface scanning',
      'Utility identification and marking',
      'Data processing and mapping',
      'Comprehensive utility map delivery',
    ],
    equipment: ['ScanLine', 'Satellite', 'Activity'],
    equipmentNames: ['Underground Cable Detector', 'GPS Systems', 'GIS Software'],
  },
  'demarcation-survey': {
    overview:
      'Plot Demarcation Survey services are carried out to accurately establish and mark the legal boundaries of a plot or land parcel. This process is essential for confirming land ownership, resolving boundary disputes, and preparing for construction or development.',
    features: [
      'Legal boundary establishment',
      'Title deed coordinate verification',
      'Government authority coordination',
      'On-site boundary marking',
      'Dispute resolution support',
      'Official documentation preparation',
    ],
    process: [
      'Review of official land records and title deeds',
      'Coordinate extraction and verification',
      'GPS/Total Station setup on-site',
      'Boundary point establishment',
      'Coordination with government representatives',
      'Documentation for official approval',
    ],
    equipment: ['Satellite', 'Navigation', 'Activity'],
    equipmentNames: ['GPS/GNSS Systems', 'Total Station', 'AutoCAD Software'],
  },
  'gate-level-survey': {
    overview:
      'Gate Level Computation Surveys are conducted to determine the appropriate gate level of a plot in relation to nearby infrastructure—such as adjacent roads or neighboring plots. This elevation data is critical during the preconstruction phase.',
    features: [
      'Elevation determination relative to infrastructure',
      'Connection to Dubai Virtual Reference Station (DVRS)',
      'Quick and accurate geospatial data access',
      'Office data processing and analysis',
      'Authority submission preparation',
      'Essential preconstruction planning data',
    ],
    process: [
      'Site survey planning',
      'Automatic Level or GPS setup',
      'DVRS connection establishment',
      'Field data collection',
      'Office processing and calculations',
      'Authority submission and approval',
    ],
    equipment: ['Activity', 'Satellite', 'Activity'],
    equipmentNames: ['Automatic Level', 'GPS Receivers', 'Data Processing Software'],
  },
  'stakeout-survey': {
    overview:
      'A stakeout survey involves placing steel/wooden stakes or other physical markers on the ground to indicate the exact locations of planned construction elements based on engineering or architectural plans. This critical step ensures that improvements are built in the correct location and to precise specifications.',
    features: [
      'Building foundations marking',
      'Structural columns positioning',
      'Pavement and roadways layout',
      'Curbs and sidewalks marking',
      'Underground utilities placement',
      'Construction error minimization',
      'Blueprint alignment verification',
    ],
    process: [
      'Engineering/architectural plan review',
      'Coordinate calculation and preparation',
      'Site setup with survey equipment',
      'Physical marker placement',
      'Elevation and position verification',
      'Documentation and handover',
    ],
    equipment: ['Navigation', 'Satellite', 'Activity'],
    equipmentNames: ['Total Station', 'GPS Systems', 'AutoCAD Software'],
  },
  'volumetric-survey': {
    overview:
      'A volumetric survey is a precise method used to measure the volume of stockpiles, earthworks, or other material accumulations. These surveys are essential for providing accurate, independent quantity assessments—commonly required in quarry operations, construction sites, and material stockpile management.',
    features: [
      'Stockpile volume measurement',
      'Earthwork calculations',
      'Cut and fill analysis',
      'Inventory control support',
      'CAD, PDF, and Excel format delivery',
      'Qualitative and quantitative data',
    ],
    process: [
      'Site assessment and planning',
      'Survey equipment deployment',
      'Comprehensive data collection',
      'Volume calculation processing',
      'Multiple format report generation',
      'Client workflow integration',
    ],
    equipment: ['Satellite', 'Activity', 'Navigation'],
    equipmentNames: ['GPS/GNSS Systems', 'Data Processing Software', 'Total Station'],
  },
  'bathymetric-survey': {
    overview:
      'Bathymetric Survey services provide underwater depth measurements and seabed mapping for marine and coastal projects. These surveys are essential for understanding underwater topography, navigation planning, and coastal development.',
    features: [
      'Underwater depth measurement',
      'Seabed topography mapping',
      'Marine project planning support',
      'Coastal development data',
      'Navigation chart preparation',
      'Environmental assessment support',
    ],
    process: [
      'Project scope and area definition',
      'Survey vessel and equipment preparation',
      'Systematic depth data collection',
      'Seabed feature identification',
      'Data processing and chart generation',
      'Comprehensive bathymetric map delivery',
    ],
    equipment: ['Satellite', 'Activity', 'Navigation'],
    equipmentNames: ['GPS/GNSS Systems', 'Data Processing Software', 'Survey Equipment'],
  },
};

interface ServiceContentProps {
  slug: string;
}

export default function ServiceContent({ slug }: ServiceContentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const data = SERVICE_DATA[slug as keyof typeof SERVICE_DATA];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (!data) {
    return null;
  }

  return (
    <section ref={sectionRef} className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
      <Container>
        <div className={styles.grid}>
          {/* Overview */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Service Overview</h2>
            <p className={styles.overview}>{data.overview}</p>
          </div>

          {/* Key Features */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Features & Benefits</h2>
            <ul className={styles.featureList}>
              {data.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <CheckCircle size={20} className={styles.featureIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Process</h2>
            <div className={styles.processList}>
              {data.process.map((step, index) => (
                <div key={index} className={styles.processStep}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepContent}>{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Equipment & Technology</h2>
            <div className={styles.equipmentGrid}>
              {data.equipment.map((iconName, index) => {
                const Icon = ICON_MAP[iconName as keyof typeof ICON_MAP];
                return (
                  <div key={index} className={styles.equipmentCard}>
                    <div className={styles.equipmentIcon}>
                      <Icon size={28} />
                    </div>
                    <p className={styles.equipmentName}>{data.equipmentNames[index]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
