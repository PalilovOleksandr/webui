// import css from './page.module.css';
import Advantages from '@/components/Advantages/Advantages';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import BenefitsService from '@/components/BenefitsService/BenefitsService';
import AlimonyService from '@/components/AlimonyService/AlimonyService';
import ResultsBlock from '@/components/ResultsBlock/ResultsBlock';
import PriceDetails from '@/components/PriceDetails/PriceDetails';
import Review from '@/components/Review/Review';
import FAQ from '@/components/FAQ/FAQ';
import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/Hero/Hero';

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <Advantages />
      <ServiceCard />
      <BenefitsService />
      <AlimonyService />
      <ResultsBlock />
      <PriceDetails />
      <Review />
      <FAQ />
    </>
  );
}
