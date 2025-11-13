'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, Users, Building2, TrendingUp } from 'lucide-react';
import Container from '@/app/components/ui/Container';
import styles from './StatsSection.module.css';

const STATS = [
  {
    id: 'experience',
    value: 15,
    label: 'Years of Experience',
    suffix: '+',
    icon: Award,
  },
  {
    id: 'projects',
    value: 500,
    label: 'Projects Completed',
    suffix: '+',
    icon: Building2,
  },
  {
    id: 'clients',
    value: 200,
    label: 'Satisfied Clients',
    suffix: '+',
    icon: Users,
  },
  {
    id: 'accuracy',
    value: 99.9,
    label: 'Accuracy Rate',
    suffix: '%',
    icon: TrendingUp,
  },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
    <section ref={sectionRef} className={styles.stats}>
      <Container>
        <div className={styles.grid}>
          {STATS.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

interface StatCardProps {
  stat: {
    value: number;
    label: string;
    suffix: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  };
  isVisible: boolean;
  delay: number;
}

function StatCard({ stat, isVisible, delay }: StatCardProps) {
  const [count, setCount] = useState(0);
  const { value, label, suffix, icon: Icon } = stat;

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep === steps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.min(increment * currentStep, value));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div 
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.iconWrapper}>
        <Icon size={32} className={styles.icon} />
      </div>
      <div className={styles.content}>
        <div className={styles.number}>
          {value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
          <span className={styles.suffix}>{suffix}</span>
        </div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
}
