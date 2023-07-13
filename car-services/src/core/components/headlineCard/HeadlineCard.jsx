import React from 'react';
import { HeadlineCardStyles } from './HeadlineCard.Styles';

export default function HeadlineCard({ image, headline, body }) {
  return (
    <HeadlineCardStyles>
      <div>
        <img src={image} alt='Car' />
      </div>
      <div className='headlineCardContent'>
        <p className='title01'>{headline}</p>
        <p className='body02'>{body}</p>
      </div>
    </HeadlineCardStyles>
  );
}
