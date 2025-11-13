import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/app/components/ui/Container';
import SectionHeading from '@/app/components/ui/SectionHeading';
import ServiceCard from '@/app/components/ui/ServiceCard';
import { SERVICES } from '@/app/lib/constants';
import styles from './services.module.css';

export const metadata = {
  title: 'Our Services - Royal Survey | Professional Land Surveying Services',
  description: 'Explore our comprehensive range of professional land surveying services including topographic surveys, demarcation, utilities detection, and more.',
};

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Services</h1>
            <p className={styles.heroDescription}>
              Comprehensive land surveying solutions tailored to your project needs. From topographic surveys to underground utilities detection, we deliver precision and reliability in every measurement.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <Container>
          <SectionHeading
            title="What We Offer"
            subtitle="Professional surveying services for infrastructure, construction, and land development"
            centered
          />
          <div className={styles.servicesGrid}>
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Need a Custom Solution?</h2>
            <p className={styles.ctaDescription}>
              Every project is unique. Contact us to discuss your specific surveying requirements and receive a tailored solution.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              <span>Contact Us</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
