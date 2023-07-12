import React from 'react';
import { FeatureCardStyles } from './FeatureCard.Styles';

export default function FeatureCard({ title, paragraph, icon }) {
  return (
    <FeatureCardStyles>
      <div>
        <img src={icon} alt='Icon' />
      </div>
      <p className='title01'>{title}</p>
      <p>{paragraph}</p>
    </FeatureCardStyles>
  );
}
