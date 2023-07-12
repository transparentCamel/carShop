import React from 'react';
import { GetInTouchStyles } from './GetInTouch.Style';
import facebook from '../../../assets/images/facebook.svg';
import twitter from '../../../assets/images/twitter.svg';
import instagram from '../../../assets/images/instagram.svg';
import linkedIn from '../../../assets/images/linkedIn.svg';
import GeneralInfo from '../../components/generalInfo/GeneralInfo';

export default function GetInTouch() {
  return (
    <GetInTouchStyles>
      <div className='getInTouchLeftContainer'>
        <h3>Get in touch with us for your service</h3>

        <div className='socialIconsContainer'>
          <img src={facebook} alt='Icon' />
          <img src={twitter} alt='Icon' />
          <img src={instagram} alt='Icon' />
          <img src={linkedIn} alt='Icon' />
        </div>
      </div>
      <GeneralInfo />
    </GetInTouchStyles>
  );
}
