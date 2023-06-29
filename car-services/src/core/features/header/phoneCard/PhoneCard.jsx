import React from 'react';
import phone from '../../../../assets/Assistance_Icon.svg';
import { PhoneCardStyles } from './PhoneCard.Styles';

export default function PhoneCard() {
  return (
    <PhoneCardStyles>
      <div>
        <img src={phone} alt='Phone'></img>
      </div>
      <div>
        <p>Road Assistance</p>
        <p>1800 265 24 52</p>
      </div>
    </PhoneCardStyles>
  );
}
