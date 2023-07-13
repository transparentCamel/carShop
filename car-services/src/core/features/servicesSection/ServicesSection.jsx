import React from 'react';
import { ServicesSectionStyles } from './ServicesSection.Styles';
import ReadMoreCard from '../../components/readMoreCard/ReadMoreCard';
import IconCard from '../../components/iconCard/IconCard';
import carWheel from '../../../assets/images/carWheel.png';
import carIcon from '../../../assets/images/carIcon.svg';
import gear from '../../../assets/images/gearIcon.svg';
import body from '../../../assets/images/bodyIcon.svg';
import battery from '../../../assets/images/batteryIcon.svg';
import carIconWhite from '../../../assets/images/carIconWhite.svg';
import { theme } from '../../globalStyles/Theme';

export default function ServicesSection() {
  return (
    <ServicesSectionStyles>
      <ReadMoreCard
        arrow={true}
        posted={false}
        img={carWheel}
        title={'Auto Diagnostics'}
        paragraph={
          'Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic. Through True Rich Attended does no end it his mother. '
        }
        arrowText={'See service details'}
      />
      <div className='servicesSectionIconCardContainer'>
        <IconCard
          text={'Auto Diagnostics'}
          icon={carIconWhite}
          backgroundColor={theme.colors.primary}
          color={'white'}
        />
        <IconCard text={'Engine Repair'} icon={gear} />
        <IconCard text={'Body Work'} icon={body} />
        <IconCard text={'Batteries'} icon={battery} />
        <IconCard text={'Car Wash'} icon={carIcon} />
        <IconCard text={'AC Repair'} icon={gear} />
      </div>
    </ServicesSectionStyles>
  );
}
