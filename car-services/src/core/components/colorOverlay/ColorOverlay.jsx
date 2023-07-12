import React from 'react';
import { ColorOverlayStyles } from './ColorOverlay.Styles';

export default function ColorOverlay({
  image,
  heading,
  paragraph,
  backgroundColor,
}) {
  return (
    <ColorOverlayStyles backgroundColor={backgroundColor}>
      <img src={image} alt='Car Service' />
      <div className='overlay'></div>
      <div className='overlayContent'>
        <h4>{heading}</h4>
        <p>{paragraph}</p>
      </div>
    </ColorOverlayStyles>
  );
}
