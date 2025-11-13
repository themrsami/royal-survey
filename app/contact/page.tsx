import { Metadata } from 'next';
import Container from '@/app/components/ui/Container';
import ContactInfo from '@/app/components/contact/ContactInfo';
import ContactMap from '@/app/components/contact/ContactMap';
import ContactCTA from '@/app/components/contact/ContactCTA';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | Royal Survey',
  description: 'Get in touch with Royal Survey for professional surveying services. Call us at +971 50 1718389 or email Info@royalsurvey.com',
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroDescription}>
              Get in touch with our team for professional surveying solutions tailored to your project needs
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Information & Map Section */}
      <section className={styles.contactSection}>
        <Container>
          <div className={styles.contactGrid}>
            <ContactInfo />
            <ContactMap />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </main>
  );
}
