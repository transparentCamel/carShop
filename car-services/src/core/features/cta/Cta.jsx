import React from 'react';
import { CtaStyles } from './Cta.Styles';
import Button from '../../components/button/Button';
import { theme } from '../../globalStyles/Theme';
import jumpLeads from '../../../assets/images/jumpLeads.png';
import carImage from '../../../assets/images/carImage.png';

export default function Cta() {
  return (
    <CtaStyles>
      <div className='carImageContainer'>
        <img src={carImage} alt='Car' />
      </div>
      <div className='ctaTextContainer'>
        <h3>Get in touch with us for your service related query</h3>
        <Button text={'Contact Us'} backgroundColor={theme.colors.black} />
      </div>
      <div className='jumpLeadsContainer'>
        <img src={jumpLeads} alt='Jump leads' />
      </div>
    </CtaStyles>
  );
}
