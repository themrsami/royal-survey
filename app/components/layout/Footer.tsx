import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS, SERVICES } from '@/app/lib/constants';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Company Info */}
          <div className={styles.column}>
            <div className={styles.logo}>
              <h3 className={styles.logoTitle}>Royal Survey</h3>
              <p className={styles.logoTagline}>{COMPANY_INFO.tagline}</p>
            </div>
            <p className={styles.description}>
              Professional land surveying services delivering precision and accuracy for your projects across the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <nav className={styles.linkList}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.link}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Our Services</h4>
            <nav className={styles.linkList}>
              {SERVICES.slice(0, 5).map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className={styles.link}
                >
                  {service.title}
                </Link>
              ))}
              <Link href="/services" className={styles.linkAll}>
                View All Services →
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact Us</h4>
            <div className={styles.contactList}>
              <a href={`tel:${COMPANY_INFO.phone}`} className={styles.contactItem}>
                <Phone size={18} />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className={styles.contactItem}>
                <Mail size={18} />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className={styles.contactItem}>
                <Clock size={18} />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={18} />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.bottomLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
