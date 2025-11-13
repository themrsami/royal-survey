'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import Container from '@/app/components/ui/Container';
import Button from '@/app/components/ui/Button';
import { COMPANY_INFO } from '@/app/lib/constants';
import styles from './ContactCTA.module.css';

export default function ContactCTA() {
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

  const whatsappNumber = COMPANY_INFO.phone.replace(/[\s+]/g, '');

  return (
    <section 
      ref={sectionRef}
      className={`${styles.cta} ${isVisible ? styles.visible : ''}`}
    >
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to Start Your Survey Project?
          </h2>
          <p className={styles.description}>
            Contact our team today for professional surveying services. We're available to discuss your project requirements and provide expert consultation.
          </p>
          <div className={styles.buttonGroup}>
            <Button 
              href={`https://wa.me/${whatsappNumber}`}
              variant="primary" 
              size="lg"
              icon={<MessageCircle size={20} />}
              external
            >
              WhatsApp Us
            </Button>
            <Button 
              href={`tel:${COMPANY_INFO.phone}`}
              variant="outline"
              size="lg"
              icon={<Phone size={20} />}
            >
              {COMPANY_INFO.phone}
            </Button>
            <Button 
              href={`mailto:${COMPANY_INFO.email}`}
              variant="outline"
              size="lg"
              icon={<Mail size={20} />}
            >
              Send Email
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
