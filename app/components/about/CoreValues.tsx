'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Target,
  Shield,
  Users,
  Clock,
  Handshake,
  Heart,
  Zap,
  FileCheck,
} from 'lucide-react';
import Container from '@/app/components/ui/Container';
import SectionHeading from '@/app/components/ui/SectionHeading';
import { CORE_VALUES } from '@/app/lib/constants';
import styles from './CoreValues.module.css';

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

export default function CoreValues() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} className={`${styles.coreValues} ${isVisible ? styles.visible : ''}`}>
      <Container>
        <SectionHeading
          title="Our Core Values"
          subtitle="The principles that guide everything we do"
          centered
        />
        <div className={styles.grid}>
          {CORE_VALUES.map((value) => {
            const Icon = ICON_MAP[value.icon as keyof typeof ICON_MAP];
            return (
              <div key={value.id} className={styles.valueCard}>
                <div className={styles.iconWrapper}>
                  <Icon size={32} className={styles.icon} />
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
