import React from 'react';
import { PersonCardStyles } from './PersonCard.Styles';

export default function PersonCard({ img, title, text }) {
  return (
    <PersonCardStyles>
      <img src={img} alt='Person' className='cardImage' />
      <div class='cardOverlay'></div>
      <div class='cardContent'>
        <p class='title02 cardTitle'>{title}</p>
        <p class='cardDescription'>{text}</p>
      </div>
    </PersonCardStyles>
  );
}
