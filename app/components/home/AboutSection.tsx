'use client';

import Image from 'next/image';
import { Target, Award, Users, TrendingUp } from 'lucide-react';
import Button from '@/app/components/ui/Button';
import Container from '@/app/components/ui/Container';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.15 });
  const highlights = [
    {
      icon: Target,
      title: 'Precision First',
      description: 'Unwavering commitment to accuracy in every measurement',
    },
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Setting benchmarks in quality and innovation',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with deep industry expertise',
    },
    {
      icon: TrendingUp,
      title: 'Latest Technology',
      description: 'State-of-the-art equipment for superior results',
    },
  ];

  return (
    <section ref={elementRef} className={`${styles.about} ${isVisible ? styles.visible : ''}`}>
      <Container>
        <div className={styles.grid}>
          {/* Content Side */}
          <div className={styles.content}>
            <div className={styles.badge}>About Royal Survey</div>
            
            <h2 className={styles.title}>
              Premier Land Surveying Services in Dubai & UAE
            </h2>
            
            <p className={styles.description}>
              Royal Survey stands as a premier land-surveying firm, renowned for its unwavering 
              commitment to excellence, precision, and innovation. Our team of seasoned professionals 
              blends deep industry expertise with the latest in surveying technology to consistently 
              exceed client expectations.
            </p>

            {/* Mission Statement */}
            <div className={styles.mission}>
              <div className={styles.missionIcon}>
                <Target size={24} />
              </div>
              <div>
                <h3 className={styles.missionTitle}>Our Mission</h3>
                <p className={styles.missionText}>
                  To provide accurate, reliable, and timely surveying solutions that empower our 
                  clients to make informed decisions and build with confidence.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className={styles.highlights}>
              {highlights.map((highlight) => (
                <div key={highlight.title} className={styles.highlight}>
                  <highlight.icon className={styles.highlightIcon} size={20} />
                  <div>
                    <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                    <p className={styles.highlightText}>{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/about" variant="primary" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Image Side */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/about-preview.webp"
                alt="Professional surveyor using precision equipment"
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.imageOverlay}></div>
            </div>

            {/* Floating Stats Card */}
            <div className={styles.statsCard}>
              <div className={styles.statsItem}>
                <div className={styles.statsNumber}>15+</div>
                <div className={styles.statsLabel}>Years Experience</div>
              </div>
              <div className={styles.statsDivider}></div>
              <div className={styles.statsItem}>
                <div className={styles.statsNumber}>500+</div>
                <div className={styles.statsLabel}>Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
