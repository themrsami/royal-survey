'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import Container from '@/app/components/ui/Container';
import Button from '@/app/components/ui/Button';
import { COMPANY_INFO } from '@/app/lib/constants';
import styles from './EquipmentCTA.module.css';

export default function EquipmentCTA() {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`${styles.cta} ${isVisible ? styles.visible : ''}`}
    >
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Need Advanced Equipment for Your Project?
          </h2>
          <p className={styles.description}>
            Our state-of-the-art equipment and experienced team deliver precise, reliable results for projects of any scale.
          </p>
          <div className={styles.buttonGroup}>
            <Button 
              href="/contact" 
              variant="primary" 
              size="lg"
              icon={<ArrowRight size={20} />}
            >
              Request a Quote
            </Button>
            <Button 
              href={`tel:${COMPANY_INFO.phone}`}
              variant="outline"
              size="lg"
              icon={<Phone size={20} />}
            >
              {COMPANY_INFO.phone}
            </Button>
          </div>
          <div className={styles.contactInfo}>
            <a href={`mailto:${COMPANY_INFO.email}`} className={styles.contactLink}>
              <Mail size={18} />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
