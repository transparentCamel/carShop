import React from 'react';
import { QuoteStyles } from './Quote.Style';
import Form from '../form/Form';
import TextFeature from '../textFeature/TextFeature';
import wrench from '../../../assets/wrenchIconTextFeature.svg';
import mechanic from '../../../assets/mechanicIconTextFeature.svg';
import dollar from '../../../assets/dollarIconTextFeature.svg';
import LearnMoreArrow from '../../components/learnMoreArrow/LearnMoreArrow';

export default function Quote() {
  return (
    <QuoteStyles>
      <div>
        <h2>We are taking car servicing seriously</h2>
        <TextFeature
          svg={wrench}
          title={'Convenient service'}
          paragraph={
            'Through True Rich Attended does no end it his mother since real had half every him.'
          }
        />
        <TextFeature
          svg={mechanic}
          title={'Expert mechanics'}
          paragraph={
            'Through True Rich Attended does no end it his mother since real had half every him.'
          }
        />
        <TextFeature
          svg={dollar}
          title={'Transparent pricing'}
          paragraph={
            'Through True Rich Attended does no end it his mother since real had half every him.'
          }
        />
        <LearnMoreArrow text={'Know more about us'} />
      </div>
      <div>
        <Form
          headingText={'Get a quote for the car service'}
          buttonText={'Get your quote'}
          firstInpuType={'text'}
          secondInpuType={'text'}
          thirdInpuType={'text'}
          fourthInpuType={'number'}
          firstPlaceholder={'Enter your location'}
          secondPlaceholder={'Enter your location'}
          thirdPlaceholder={'Enter your location'}
          fourthPlaceholder={'Your phone number'}
        />
      </div>
    </QuoteStyles>
  );
}
