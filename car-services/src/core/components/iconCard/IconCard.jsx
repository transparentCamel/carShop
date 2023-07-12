import React from 'react';
import { IconCardStyles } from './IconCard.Styles';

export default function IconCard({ icon, text, backgroundColor, color }) {
  return (
    <IconCardStyles backgroundColor={backgroundColor} color={color}>
      <img src={icon} alt='Icon' />
      <p>{text}</p>
    </IconCardStyles>
  );
}
