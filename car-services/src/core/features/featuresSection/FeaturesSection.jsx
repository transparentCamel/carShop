import React from 'react';
import { FeaturesSectionStyles } from './FeaturesSection.Styles';
import Experience from '../experience/Experience';
import FeatureCard from '../../components/featureCard/FeatureCard';
import wrench from '../../../assets/images/wrenchPink.svg';
import man from '../../../assets/images/manPink.svg';
import dollar from '../../../assets/images/dollarPink.svg';

export default function FeaturesSection() {
  return (
    <FeaturesSectionStyles>
      <h2 className='feeatureSectionHeading'>
        Services we provide to our valued customers
      </h2>
      <div className='featuresBlock'>
        <FeatureCard
          title={'Convenient Service'}
          paragraph={
            'Through True Rich Attended does no end it his mother since real had half every him end it his mother'
          }
          icon={wrench}
        />
        <FeatureCard
          title={'Expert Mechanics'}
          paragraph={
            'Through True Rich Attended does no end it his mother since real had half every him end it his mother'
          }
          icon={man}
        />
        <FeatureCard
          title={'Transparent Pricing'}
          paragraph={
            'Through True Rich Attended does no end it his mother since real had half every him end it his mother'
          }
          icon={dollar}
        />
      </div>
      <Experience />
    </FeaturesSectionStyles>
  );
}
