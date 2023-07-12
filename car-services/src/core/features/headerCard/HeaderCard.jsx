import React from 'react';
import { HeaderCardStyles } from './HeaderCard.Style';
import Button from '../../components/button/Button';
import { theme } from '../../globalStyles/Theme';

export default function HeaderCard({ image, heading, paragraph }) {
  return (
    <HeaderCardStyles>
      <div className='headerCardContainer'>
        <div className='headerCardImageContainer'>
          <img src={image} alt='Car Services' />
        </div>

        <div className='headerCardTextContainer'>
          <h1>{heading}</h1>
          <p>{paragraph}</p>
          <Button
            backgroundColor={theme.colors.primary}
            text={'Book a service'}
          />
        </div>
      </div>
    </HeaderCardStyles>
  );
}
