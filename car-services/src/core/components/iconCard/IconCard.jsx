import React from 'react';
import { IconCardStyles } from './IconCard.Styles';

export default function IconCard({ icon, text }) {
  return (
    <IconCardStyles>
      <img src={icon} alt='Icon' />
      <p>{text}</p>
    </IconCardStyles>
  );
}
