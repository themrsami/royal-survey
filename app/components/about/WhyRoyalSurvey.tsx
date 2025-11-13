'use client';

import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Wrench, Award, HeartHandshake } from 'lucide-react';
import Container from '@/app/components/ui/Container';
import SectionHeading from '@/app/components/ui/SectionHeading';
import styles from './WhyRoyalSurvey.module.css';

const WHY_CHOOSE = [
  {
    id: 'technical-expertise',
    title: 'Technical Expertise',
    description:
      'Our team comprises experienced & skilled surveyors with extensive experience in land surveying, and surveying technology.',
    icon: Lightbulb,
  },
  {
    id: 'customized-solutions',
    title: 'Customized Solutions',
    description:
      'We understand that every project is unique, and we tailor our surveying services to meet the specific requirements and objectives of each client, delivering personalized solutions that add value and mitigate risks.',
    icon: Wrench,
  },
  {
    id: 'quality-assurance',
    title: 'Quality Assurance',
    description:
      'Quality is ingrained in our processes and methodologies. We adhere to rigorous quality assurance protocols to guarantee the precision and integrity of our surveying deliverables.',
    icon: Award,
  },
  {
    id: 'client-centric',
    title: 'Client Centric Approach',
    description:
      'Client satisfaction is our top priority. We prioritize clear communication, timely delivery, and responsive customer service to ensure a seamless and positive experience for our clients throughout the surveying process.',
    icon: HeartHandshake,
  },
];

export default function WhyRoyalSurvey() {
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
    <section ref={sectionRef} className={`${styles.whyChoose} ${isVisible ? styles.visible : ''}`}>
      <Container>
        <SectionHeading
          title="Why Choose Royal Survey"
          subtitle="What sets us apart in the surveying industry"
          centered
        />
        <div className={styles.grid}>
          {WHY_CHOOSE.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={styles.card}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={40} className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
