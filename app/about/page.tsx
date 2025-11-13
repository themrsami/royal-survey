import CompanyStory from '@/app/components/about/CompanyStory';
import MissionVision from '@/app/components/about/MissionVision';
import CoreValues from '@/app/components/about/CoreValues';
import WhyRoyalSurvey from '@/app/components/about/WhyRoyalSurvey';

export const metadata = {
  title: 'About Us - Royal Survey | Premier Land Surveying Company',
  description: 'Learn about Royal Survey, a premier land-surveying firm renowned for excellence, precision, and innovation. Discover our mission, vision, and core values.',
};

export default function AboutPage() {
  return (
    <>
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <WhyRoyalSurvey />
    </>
  );
}
