import { Metadata } from 'next';
import Container from '@/app/components/ui/Container';
import SectionHeading from '@/app/components/ui/SectionHeading';
import EquipmentDetail from '@/app/components/equipment/EquipmentDetail';
import EquipmentCTA from '@/app/components/equipment/EquipmentCTA';
import { EQUIPMENT } from '@/app/lib/constants';
import styles from './equipment.module.css';

export const metadata: Metadata = {
  title: 'Equipment & Technology | Royal Survey',
  description: 'Advanced surveying equipment and technology including Total Stations, GPS/GNSS systems, AutoCAD, and GIS software for precision surveying services.',
};

export default function EquipmentPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Equipment & Technology</h1>
            <p className={styles.heroDescription}>
              State-of-the-art surveying equipment and cutting-edge technology powering our precision services
            </p>
          </div>
        </Container>
      </section>

      {/* Equipment Grid Section */}
      <section className={styles.equipmentSection}>
        <Container>
          <SectionHeading
            title="Our Advanced Equipment"
            subtitle="Industry-leading tools and software for accurate, reliable surveying"
            centered
          />
          <div className={styles.equipmentGrid}>
            {EQUIPMENT.map((equipment) => (
              <EquipmentDetail key={equipment.id} equipment={equipment} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <EquipmentCTA />
    </main>
  );
}
