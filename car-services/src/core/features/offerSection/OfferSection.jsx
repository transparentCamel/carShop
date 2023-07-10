import React from 'react';
import { OfferSectionStyles } from './OfferSection.Styles';
import carIcon from '../../../assets/images/carIcon.svg';
import IconCard from '../../components/iconCard/IconCard';
import wrenchIcon from '../../../assets/images/wrenchIcon.svg';
import shieldIcon from '../../../assets/images/shieldIcon.svg';
import batteryIcon from '../../../assets/images/batteryIcon.svg';
import bodyIcon from '../../../assets/images/bodyIcon.svg';
import oilIcon from '../../../assets/images/oilIcon.svg';
import wheelIcon from '../../../assets/images/wheelIcon.svg';
import gearIcon from '../../../assets/images/gearIcon.svg';
import LearnMoreArrow from '../../components/learnMoreArrow/LearnMoreArrow';

export default function OfferSection() {
  return (
    <OfferSectionStyles>
      <div className='offerSectionTextContainer'>
        <p>What we Offer</p>
        <h2>We offer full service auto repair & maintenance</h2>
      </div>
      <div className='OfferIconCardContainer'>
        <div className='row'>
          <IconCard icon={carIcon} text={'Diagnostics'} />
          <IconCard icon={gearIcon} text={'Engine Repair'} />
          <IconCard icon={wheelIcon} text={'Wheel Repair'} />
          <IconCard icon={oilIcon} text={'Oil Filter'} />
        </div>
        <div className='row'>
          <IconCard icon={bodyIcon} text={'Body Work'} />
          <IconCard icon={batteryIcon} text={'Batteries'} />
          <IconCard icon={shieldIcon} text={'Insurance Claim'} />
          <IconCard icon={wrenchIcon} text={'Custom Service'} />
        </div>
      </div>
      <div className='OfferArrowContainer'>
        <LearnMoreArrow text={'Learn about services'} />
      </div>
    </OfferSectionStyles>
  );
}
