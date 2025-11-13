'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import Button from '@/app/components/ui/Button';
import { COMPANY_INFO } from '@/app/lib/constants';
import styles from './HeroSection.module.css';

const HERO_IMAGES = [
  '/images/hero-bg.webp',
  '/images/hero-bg-2.webp',
  '/images/hero-bg-3.webp',
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundWrapper}>
        {HERO_IMAGES.map((image, index) => (
          <div
            key={image}
            className={`${styles.background} ${index === currentImageIndex ? styles.active : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={`${styles.textContainer} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>Professional Land Surveying in UAE</span>
          </div>

          <h1 className={styles.title}>
            Royal Survey
            <span className={styles.highlight}> Precision in Every Measurement</span>
          </h1>

          <p className={styles.subtitle}>
            Delivering accurate and reliable surveying solutions for your construction, 
            infrastructure, and land development projects across Dubai and the UAE.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
          </div>

          <div className={styles.actions}>
            <Button 
              href="/services" 
              variant="primary" 
              size="lg"
              icon={<ArrowRight size={20} />}
            >
              Explore Our Services
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg"
              icon={<Phone size={20} />}
            >
              Get a Quote
            </Button>
          </div>

          <div className={styles.trustBadge}>
            <span>✓</span>
            <p>Licensed & Certified Surveyors | State-of-the-Art Equipment</p>
          </div>
        </div>
      </div>

      <div className={styles.carouselIndicators}>
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
