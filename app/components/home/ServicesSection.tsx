'use client';

import { SERVICES } from '@/app/lib/constants';
import Container from '@/app/components/ui/Container';
import SectionHeading from '@/app/components/ui/SectionHeading';
import ServiceCard from '@/app/components/ui/ServiceCard';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={elementRef} className={`${styles.services} ${isVisible ? styles.visible : ''}`}>
      <Container>
        <SectionHeading
          badge="Our Services"
          title="Comprehensive Surveying Solutions"
          subtitle="From topographic mapping to underground utilities detection, we deliver precision surveying services tailored to your project needs."
          centered
        />

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              slug={service.slug}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
