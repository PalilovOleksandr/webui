import Hero from '@/components/Hero/Hero';
// import css from './page.module.css';
import Advantages from '@/components/Advantages/Advantages';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import BenefitsService from '@/components/BenefitsService/BenefitsService';
import AlimonyService from '@/components/AlimonyService/AlimonyService';
import ResultsBlock from '@/components/ResultsBlock/ResultsBlock';
import PriceDetails from '@/components/PriceDetails/PriceDetails';
import Review from '@/components/Review/Review';
import FAQ from '@/components/FAQ/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
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
