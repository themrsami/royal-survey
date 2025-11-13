'use client';

import Container from '@/app/components/ui/Container';
import Button from '@/app/components/ui/Button';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import styles from './CTASection.module.css';

export default function CTASection() {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={elementRef} className={`${styles.cta} ${isVisible ? styles.visible : ''}`}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Ready to Start Your Survey Project?
            </h2>
            <p className={styles.subtitle}>
              Contact us today for accurate, reliable, and timely surveying solutions 
              tailored to your project needs. Our team is ready to assist you.
            </p>
          </div>

          <div className={styles.actions}>
            <Button 
              variant="primary" 
              size="lg" 
              href="/contact"
              icon={<ArrowRight size={20} />}
            >
              Get a Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              href="tel:+971501718389"
              icon={<Phone size={20} />}
            >
              Call Us Now
            </Button>
          </div>

          <div className={styles.contactInfo}>
            <a href="tel:+971501718389" className={styles.contactItem}>
              <Phone size={18} />
              <span>+971 50 1718389</span>
            </a>
            <span className={styles.divider}>•</span>
            <a href="mailto:Info@royalsurvey.com" className={styles.contactItem}>
              <Mail size={18} />
              <span>Info@royalsurvey.com</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
