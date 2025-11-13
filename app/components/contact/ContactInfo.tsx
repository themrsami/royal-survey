'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Clock, MessageCircle, MapPin } from 'lucide-react';
import Button from '@/app/components/ui/Button';
import { COMPANY_INFO } from '@/app/lib/constants';
import styles from './ContactInfo.module.css';

export default function ContactInfo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  // Format phone number for WhatsApp (remove spaces and +)
  const whatsappNumber = COMPANY_INFO.phone.replace(/[\s+]/g, '');

  return (
    <div 
      ref={sectionRef}
      className={`${styles.container} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.subtitle}>
          We're here to help with your surveying needs. Reach out through any of the channels below.
        </p>
      </div>

      <div className={styles.contactMethods}>
        {/* Phone */}
        <div className={styles.contactCard}>
          <div className={styles.iconWrapper}>
            <Phone className={styles.icon} size={24} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Phone</h3>
            <a href={`tel:${COMPANY_INFO.phone}`} className={styles.contactLink}>
              {COMPANY_INFO.phone}
            </a>
            <p className={styles.cardDescription}>
              Call us directly for immediate assistance
            </p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className={styles.contactCard}>
          <div className={styles.iconWrapper}>
            <MessageCircle className={styles.icon} size={24} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>WhatsApp</h3>
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              {COMPANY_INFO.phone}
            </a>
            <p className={styles.cardDescription}>
              Message us on WhatsApp for quick responses
            </p>
          </div>
        </div>

        {/* Email */}
        <div className={styles.contactCard}>
          <div className={styles.iconWrapper}>
            <Mail className={styles.icon} size={24} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Email</h3>
            <a href={`mailto:${COMPANY_INFO.email}`} className={styles.contactLink}>
              {COMPANY_INFO.email}
            </a>
            <p className={styles.cardDescription}>
              Send us an email for detailed inquiries
            </p>
          </div>
        </div>

        {/* Working Hours */}
        <div className={styles.contactCard}>
          <div className={styles.iconWrapper}>
            <Clock className={styles.icon} size={24} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Working Hours</h3>
            <p className={styles.workingHours}>
              {COMPANY_INFO.workingHours}
            </p>
            <p className={styles.cardDescription}>
              Available during business hours
            </p>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className={styles.actionButtons}>
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
          Call Now
        </Button>
      </div>
    </div>
  );
}
