'use client';

import { useEffect, useRef, useState } from 'react';
import { Target, Eye } from 'lucide-react';
import Container from '@/app/components/ui/Container';
import styles from './MissionVision.module.css';

const MISSION = {
  title: 'Our Mission',
  text: 'To provide accurate, reliable, and timely surveying solutions that empower our clients to make informed decisions, drive progress, and build with confidence. We are committed to excellence, innovation, and integrity in every project we undertake.',
  icon: Target,
};

const VISION = {
  title: 'Our Vision',
  text: 'To be the most trusted and innovative surveying company, setting industry benchmarks in quality, technology, and customer satisfaction — shaping the landscapes of tomorrow with precision and purpose.',
  icon: Eye,
};

export default function MissionVision() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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
    <section ref={sectionRef} className={`${styles.missionVision} ${isVisible ? styles.visible : ''}`}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <MISSION.icon size={48} className={styles.icon} />
            </div>
            <h2 className={styles.title}>{MISSION.title}</h2>
            <p className={styles.text}>{MISSION.text}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <VISION.icon size={48} className={styles.icon} />
            </div>
            <h2 className={styles.title}>{VISION.title}</h2>
            <p className={styles.text}>{VISION.text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
