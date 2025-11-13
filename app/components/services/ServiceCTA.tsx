'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import Container from '@/app/components/ui/Container';
import { COMPANY_INFO } from '@/app/lib/constants';
import styles from './ServiceCTA.module.css';

export default function ServiceCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className={`${styles.cta} ${isVisible ? styles.visible : ''}`}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>Ready to Get Started?</h2>
            <p className={styles.subtitle}>
              Contact us today to discuss your project requirements and receive a customized quote for our professional surveying services.
            </p>
          </div>

          <div className={styles.buttonGroup}>
            <Link href="/contact" className={styles.primaryButton}>
              <span>Get a Quote</span>
              <ArrowRight size={20} />
            </Link>
            <a href={`tel:${COMPANY_INFO.phone}`} className={styles.secondaryButton}>
              <Phone size={20} />
              <span>Call Us Now</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className={styles.tertiaryButton}>
              <Mail size={20} />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
