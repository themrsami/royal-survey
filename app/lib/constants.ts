/**
 * Royal Survey - Application Constants
 * Non-color values and configuration constants
 */

// Company Information
export const COMPANY_INFO = {
  name: 'Royal Survey',
  tagline: 'Precision in Every Measurement',
  phone: '+971 50 1718389',
  email: 'Info@royalsurvey.com',
  workingHours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/equipment', label: 'Equipment' },
  { href: '/contact', label: 'Contact' },
] as const;

// Services List
export const SERVICES = [
  {
    id: 'topographic-survey',
    title: 'Topographic Survey',
    slug: 'topographic-survey',
    description: 'Comprehensive mapping of land features including spot elevations, contours, and landmarks.',
    icon: 'Mountain',
  },
  {
    id: 'underground-utilities',
    title: 'Underground Utilities Detection',
    slug: 'underground-utilities',
    description: 'Accurate identification and mapping of subsurface utility infrastructure for safer project planning.',
    icon: 'Layers',
  },
  {
    id: 'demarcation-survey',
    title: 'Demarcation Survey',
    slug: 'demarcation-survey',
    description: 'Precise establishment and marking of legal boundaries for land parcels and plots.',
    icon: 'MapPin',
  },
  {
    id: 'gate-level-survey',
    title: 'Gate Level Survey',
    slug: 'gate-level-survey',
    description: 'Determination of appropriate gate level elevation in relation to nearby infrastructure.',
    icon: 'Home',
  },
  {
    id: 'stakeout-survey',
    title: 'Stakeout Survey',
    slug: 'stakeout-survey',
    description: 'Physical marking of planned construction elements based on engineering plans.',
    icon: 'Target',
  },
  {
    id: 'volumetric-survey',
    title: 'Volumetric Survey',
    slug: 'volumetric-survey',
    description: 'Precise volume measurement of stockpiles, earthworks, and material accumulations.',
    icon: 'Box',
  },
  {
    id: 'bathymetric-survey',
    title: 'Bathymetric Survey',
    slug: 'bathymetric-survey',
    description: 'Underwater depth and seabed mapping for marine and coastal projects.',
    icon: 'Waves',
  },
] as const;

// Equipment List
export const EQUIPMENT = [
  {
    id: 'total-station',
    name: 'Total Station',
    description: 'High-precision electronic surveying instrument',
  },
  {
    id: 'gps-gnss',
    name: 'GPS/GNSS Surveying Systems',
    description: 'Advanced satellite-based positioning technology',
  },
  {
    id: 'automatic-level',
    name: 'Automatic Level',
    description: 'Professional leveling equipment for elevation measurements',
  },
  {
    id: 'cable-detector',
    name: 'Underground Cable Detector',
    description: 'Specialized equipment for locating subsurface utilities',
  },
  {
    id: 'autocad-software',
    name: 'AutoCAD & Civil 3D',
    description: 'Industry-leading design and drafting software',
  },
  {
    id: 'gis-software',
    name: 'GIS & Data Processing',
    description: 'Geographic information systems for spatial analysis',
  },
] as const;

// Core Values
export const CORE_VALUES = [
  {
    id: 'accuracy',
    title: 'Accuracy',
    description: 'We deliver data you can trust. Precision is at the heart of everything we do.',
    icon: 'Target',
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and a strong sense of responsibility.',
    icon: 'Shield',
  },
  {
    id: 'customer-focus',
    title: 'Customer Focus',
    description: 'Our clients\' goals are our priority. We strive to exceed expectations.',
    icon: 'Users',
  },
  {
    id: 'reliability',
    title: 'Reliability',
    description: 'We take pride in being dependable partners—delivering consistent results.',
    icon: 'Clock',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'We believe in the power of teamwork to achieve the best outcomes together.',
    icon: 'Handshake',
  },
  {
    id: 'respect',
    title: 'Respect',
    description: 'We treat everyone with respect, fostering an inclusive environment.',
    icon: 'Heart',
  },
  {
    id: 'responsiveness',
    title: 'Responsiveness',
    description: 'We act quickly and effectively to address challenges and adapt to changes.',
    icon: 'Zap',
  },
  {
    id: 'accountability',
    title: 'Accountability',
    description: 'We take ownership of our work and stand by our results.',
    icon: 'FileCheck',
  },
] as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Animation Durations (in milliseconds)
export const ANIMATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;
