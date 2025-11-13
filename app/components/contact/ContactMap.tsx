'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import styles from './ContactMap.module.css';

export default function ContactMap() {
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

  return (
    <div 
      ref={sectionRef}
      className={`${styles.container} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <MapPin className={styles.icon} size={24} />
        </div>
        <div>
          <h2 className={styles.title}>Our Location</h2>
          <p className={styles.subtitle}>Find us on the map</p>
        </div>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68288061376!2d54.89782404757474!3d25.076280351779395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1699889234567!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Royal Survey Location"
        />
      </div>

      <div className={styles.locationInfo}>
        <p className={styles.locationText}>
          <MapPin size={18} className={styles.locationIcon} />
          <span>United Arab Emirates</span>
        </p>
        <p className={styles.locationDescription}>
          Serving projects across the UAE with precision and reliability
        </p>
      </div>
    </div>
  );
}
