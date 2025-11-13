'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO, SERVICES } from '@/app/lib/constants';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href === '/services') {
      return pathname.startsWith('/services');
    }
    return pathname === href;
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${!isHomePage ? styles.solidBg : ''}`}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo.webp" 
              alt="Royal Survey" 
              width={40} 
              height={40} 
              className={styles.logoIcon}
            />
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>Royal Survey</span>
              <span className={styles.logoSubtitle}>Precision in Every Measurement</span>
            </div>
          </Link>

          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => {
              const isActive = isActiveLink(link.href);
              if (link.href === '/services') {
                return (
                  <div
                    key={link.href}
                    className={styles.dropdown}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link 
                      href={link.href} 
                      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    >
                      {link.label}
                      <ChevronDown size={16} className={styles.chevron} />
                    </Link>
                    {isServicesOpen && (
                      <div className={styles.dropdownMenu}>
                        {SERVICES.map((service) => {
                          const isServiceActive = pathname === `/services/${service.slug}`;
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className={`${styles.dropdownItem} ${isServiceActive ? styles.dropdownItemActive : ''}`}
                            >
                              {service.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className={styles.contactButton}
          >
            <Phone size={18} />
            <span>Contact Us</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menuButton}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              {NAV_LINKS.map((link) => {
                const isActive = isActiveLink(link.href);
                if (link.href === '/services') {
                  return (
                    <div key={link.href} className={styles.mobileDropdown}>
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={styles.mobileDropdownToggle}
                        aria-label="Toggle services menu"
                      >
                        <ChevronDown 
                          size={18} 
                          className={`${styles.mobileChevron} ${isMobileServicesOpen ? styles.mobileChevronOpen : ''}`} 
                        />
                      </button>
                      {isMobileServicesOpen && (
                        <div className={styles.mobileDropdownMenu}>
                          {SERVICES.map((service) => {
                            const isServiceActive = pathname === `/services/${service.slug}`;
                            return (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                onClick={handleLinkClick}
                                className={`${styles.mobileDropdownItem} ${isServiceActive ? styles.mobileDropdownItemActive : ''}`}
                              >
                                {service.title}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                onClick={handleLinkClick}
                className={styles.mobileContactButton}
              >
                <Phone size={18} />
                <span>Contact Us</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
