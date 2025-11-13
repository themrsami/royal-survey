import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import ServicesSection from './components/home/ServicesSection';
import WhyChooseSection from './components/home/WhyChooseSection';
import StatsSection from './components/home/StatsSection';
import EquipmentSection from './components/home/EquipmentSection';
import CTASection from './components/home/CTASection';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <StatsSection />
        <EquipmentSection />
        <CTASection />
      </main>
    </>
  );
}
