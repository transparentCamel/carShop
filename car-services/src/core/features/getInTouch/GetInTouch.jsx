import React from 'react';
import { GetInTouchStyles } from './GetInTouch.Style';
import facebook from '../../../assets/images/facebook.svg';
import twitter from '../../../assets/images/twitter.svg';
import instagram from '../../../assets/images/instagram.svg';
import linkedIn from '../../../assets/images/linkedIn.svg';

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
      <div className='getInTouchRightContainer'>
        <div>
          <p className='body01'>Help line Noumber</p>
          <p className='title02'>1800 265 24 52</p>
        </div>
        <div>
          <p className='body01'>Adress</p>
          <p className='title02'>NH 234 Public Square San Francisco 65368</p>
        </div>
        <div>
          <p className='body01'>We are Open</p>
          <p className='title02'>Monday to Friday 9:00 AM to  10:00  AM</p>
        </div>
      </div>
    </GetInTouchStyles>
  );
}
