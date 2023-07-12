import HeaderCard from '../core/features/headerCard/HeaderCard';
import car from '../assets/images/oldSuperCar.png';
import ServicesSection from '../core/features/servicesSection/ServicesSection';
import HowSection from '../core/features/howSection/HowSection';
import Cta from '../core/features/cta/Cta';
import GetInTouch from '../core/features/getInTouch/GetInTouch';
export const Services = () => {
  return (
    <>
      <HeaderCard
        image={car}
        heading={'Our services'}
        paragraph={
          'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does  '
        }
      />
      <ServicesSection />
      <HowSection />
      <Cta />
      <GetInTouch />
    </>
  );
};
