import React from 'react';
import { StepsSectionStyles } from './StepsSection.Styles';
import carImg from '../../../assets/images/miataBig.png';
import StepCard from '../../components/stepCard/StepCard';
import circleOne from '../../../assets/images/circleOne.svg';
import circleTwo from '../../../assets/images/circleTwo.svg';
import circleThree from '../../../assets/images/circleThree.svg';

export default function StepsSection() {
  return (
    <StepsSectionStyles>
      <div className='stepsSectionLeftContainer'>
        <h3>We Provide Expert Service and aim to have a long term with you</h3>
        <p className='title02'>
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter
        </p>
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
      </div>
      <div className='stepsSectionRightContainer'>
        <img src={carImg} alt='Car' />
      </div>
    </StepsSectionStyles>
  );
}
