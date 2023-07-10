import React from 'react';
import { ProcessStyles } from './ProcessSection.Style';
import Button from '../../components/button/Button';
import { theme } from '../../globalStyles/Theme';
import StepCard from '../stepCard/StepCard';
import circleOne from '../../../assets/images/circleOne.svg';
import circleTwo from '../../../assets/images/circleTwo.svg';
import circleThree from '../../../assets/images/circleThree.svg';

export default function ProcessSection() {
  return (
    <ProcessStyles>
      <div className='processTextContainer'>
        <h2>We follow a clear process to help you out.</h2>
        <p>
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire
        </p>
        <Button text={'Learn more'} backgroundColor={theme.colors.primary} />
      </div>
      <div>
        <StepCard
          withLines={true}
          svgBubble={circleOne}
          title={'Get a Quote'}
          paragraph={
            'Through True Rich Attended does no end it his mother since real had half every.'
          }
        />
        <StepCard
          withLines={true}
          svgBubble={circleTwo}
          title={'Book an Appointment'}
          paragraph={
            'Through True Rich Attended does no end it his mother since real had half every.'
          }
        />
        <StepCard
          withLines={false}
          svgBubble={circleThree}
          title={'Get your Service Done'}
          paragraph={
            'Through True Rich Attended does no end it his mother since real had half every.'
          }
        />
      </div>
    </ProcessStyles>
  );
}
