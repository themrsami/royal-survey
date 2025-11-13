'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Award, Users, Building2, TrendingUp } from 'lucide-react';
import Container from '@/app/components/ui/Container';
import SectionHeading from '@/app/components/ui/SectionHeading';
import styles from './CompanyStory.module.css';

const MILESTONES = [
  {
    year: '2024',
    title: 'Company Founded',
    description: 'Royal Survey established with a vision to provide precision surveying services',
  },
  {
    year: '2025',
    title: 'Expanding Operations',
    description: 'Growing our team and expanding services across UAE with cutting-edge technology',
  },
];

export default function CompanyStory() {
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
    <section ref={sectionRef} className={`${styles.story} ${isVisible ? styles.visible : ''}`}>
      <Container>
        <SectionHeading
          title="Our Story"
          subtitle="Building a Legacy of Precision and Excellence"
        />
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h3 className={styles.subheading}>About Royal Survey</h3>
            <p className={styles.paragraph}>
              Royal Survey stands as a premier land-surveying firm, renowned for its unwavering commitment to excellence, precision, and innovation. With a rich legacy of serving clients across a wide range of industries, we have built a solid reputation for delivering accurate and reliable surveying solutions.
            </p>
            <p className={styles.paragraph}>
              Our team of seasoned professionals blends deep industry expertise with the latest in surveying technology to consistently exceed client expectations. Whether for infrastructure, construction, or land development, Royal Survey is the trusted partner of choice for dependable, high-quality land surveying services.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <Award className={styles.highlightIcon} size={28} />
                <div>
                  <h4 className={styles.highlightTitle}>Industry Recognition</h4>
                  <p className={styles.highlightText}>Trusted across UAE for precision and reliability</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <Users className={styles.highlightIcon} size={28} />
                <div>
                  <h4 className={styles.highlightTitle}>Expert Team</h4>
                  <p className={styles.highlightText}>Seasoned professionals with deep industry expertise</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <Building2 className={styles.highlightIcon} size={28} />
                <div>
                  <h4 className={styles.highlightTitle}>Diverse Projects</h4>
                  <p className={styles.highlightText}>Serving infrastructure, construction, and land development</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <TrendingUp className={styles.highlightIcon} size={28} />
                <div>
                  <h4 className={styles.highlightTitle}>Innovation Focus</h4>
                  <p className={styles.highlightText}>Latest surveying technology and methodologies</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/about/company-photo.webp"
                alt="Royal Survey team and office"
                width={600}
                height={700}
                className={styles.image}
                priority
              />
              <div className={styles.imageOverlay} />
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className={styles.timelineSection}>
          <h3 className={styles.timelineHeading}>Our Journey</h3>
          <div className={styles.timeline}>
            {MILESTONES.map((milestone, index) => (
              <div key={milestone.year} className={styles.milestone}>
                <div className={styles.milestoneYear}>{milestone.year}</div>
                <div className={styles.milestoneContent}>
                  <h4 className={styles.milestoneTitle}>{milestone.title}</h4>
                  <p className={styles.milestoneDescription}>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
