'use client';

import { CORE_VALUES } from '@/app/lib/constants';
import Container from '@/app/components/ui/Container';
import SectionHeading from '@/app/components/ui/SectionHeading';
import ValueCard from '@/app/components/ui/ValueCard';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import styles from './WhyChooseSection.module.css';

export default function WhyChooseSection() {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={elementRef} className={`${styles.whyChoose} ${isVisible ? styles.visible : ''}`}>
      <Container>
        <SectionHeading
          badge="Why Choose Us"
          title="Built on Strong Values"
          subtitle="Our core values guide every decision we make and every service we deliver, ensuring excellence in all aspects of our work."
          centered
        />

        <div className={styles.grid}>
          {CORE_VALUES.map((value) => (
            <ValueCard
              key={value.id}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
