'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import Container from '@/app/components/ui/Container';
import styles from './ServiceHero.module.css';

interface ServiceHeroProps {
  service: {
    title: string;
    description: string;
    slug: string;
  };
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={heroRef} className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={`/images/services/${service.slug}.webp`}
          alt={service.title}
          fill
          className={styles.backgroundImage}
          priority
          quality={90}
        />
        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.content}>
          <nav className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>
              <Home size={16} />
              <span>Home</span>
            </Link>
            <ChevronRight size={16} className={styles.breadcrumbSeparator} />
            <Link href="/services" className={styles.breadcrumbLink}>
              <span>Services</span>
            </Link>
            <ChevronRight size={16} className={styles.breadcrumbSeparator} />
            <span className={styles.breadcrumbCurrent}>{service.title}</span>
          </nav>

          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.description}>{service.description}</p>
        </div>
      </Container>
    </section>
  );
}
