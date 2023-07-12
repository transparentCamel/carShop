import Cta from '../core/features/cta/Cta';
import GetInTouch from '../core/features/getInTouch/GetInTouch';
import HeaderCard from '../core/features/headerCard/HeaderCard';
import headerImg from '../assets/images/headerImageEngine.png';
import StepsSection from '../core/features/stepsSection/StepsSection';
import ColorSection from '../core/features/colorSection/ColorSection';
import FeaturesSection from '../core/features/featuresSection/FeaturesSection';
import TeamSection from '../core/features/teamSection/TeamSection';

export const About = () => {
  return (
    <>
      <HeaderCard
        image={headerImg}
        heading={'About us'}
        paragraph={
          'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does  '
        }
      />
      <StepsSection />
      <ColorSection />
      <FeaturesSection />
      <TeamSection />
      <Cta />
      <GetInTouch />
    </>
  );
};
