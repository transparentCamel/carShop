import Brands from '../core/features/brands/Brands';
import Cta from '../core/features/cta/Cta';
import Experience from '../core/features/experience/Experience';
import Faq from '../core/features/faq/Faq';
import GetInTouch from '../core/features/getInTouch/GetInTouch';
import HomeHeroCard from '../core/features/homeHeroCard/HomeHeroCard';
import OfferSection from '../core/features/offerSection/OfferSection';
import ProcessSection from '../core/features/processSection/ProcessSection';
import Quote from '../core/features/quote/Quote';
import Testimonials from '../core/features/testimonials/Testimonials';

export const HomePage = () => {
  return (
    <>
      <HomeHeroCard />
      <Quote />
      <ProcessSection />
      <OfferSection />
      <Cta />
      <Experience />
      <Brands />
      <Testimonials />
      <Faq />
      <GetInTouch />
    </>
  );
};
