import React from 'react';
import { FaqStyles } from './Faq.Styles';
import ExpandButton from '../../components/expandButton/ExpandButton';

export default function Faq() {
  return (
    <FaqStyles>
      <h3>Frequently Asked Questions</h3>
      <div className='faqCardContainer'>
        <div className='faqCard'>
          <div className='faqTextContainer'>
            <p className='title02'>How long should a car repair take?</p>
            <p className='body01 faqBody'>
              I have got my car repaired at Finsweet many times before, they are
              good at what they do. Not only did they repair my car I have got
              my car repaired at Finsweet I have got my car repaired at Finsweet
            </p>
          </div>
          <div className='faqButtonContainer openned'>
            <ExpandButton sign={'-'} />
          </div>
        </div>
        <div className='faqCard'>
          <div className='faqTextContainer'>
            <p className='title02'>How do I schedule my car's appointment ?</p>
          </div>
          <div className='faqButtonContainer'>
            <ExpandButton sign={'+'} />
          </div>
        </div>
        <div className='faqCard'>
          <div className='faqTextContainer'>
            <p className='title02'>What are the repair services provided?</p>
          </div>
          <div className='faqButtonContainer'>
            <ExpandButton sign={'+'} />
          </div>
        </div>
        <div className='faqCard'>
          <div className='faqTextContainer'>
            <p className='title02'>How do I find auto body shops near me?</p>
          </div>
          <div className='faqButtonContainer'>
            <ExpandButton sign={'+'} />
          </div>
        </div>
        <div className='faqCard'>
          <div className='faqTextContainer'>
            <p className='title02'>Genuine spare parts during car repair?</p>
          </div>
          <div className='faqButtonContainer'>
            <ExpandButton sign={'+'} />
          </div>
        </div>
      </div>
    </FaqStyles>
  );
}
