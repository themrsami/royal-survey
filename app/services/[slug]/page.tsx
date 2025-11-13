import { notFound } from 'next/navigation';
import { SERVICES } from '@/app/lib/constants';
import ServiceHero from '@/app/components/services/ServiceHero';
import ServiceContent from '@/app/components/services/ServiceContent';
import ServiceCTA from '@/app/components/services/ServiceCTA';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found - Royal Survey',
    };
  }

  return {
    title: `${service.title} - Royal Survey | Professional Land Surveying`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceContent slug={slug} />
      <ServiceCTA />
    </>
  );
}
