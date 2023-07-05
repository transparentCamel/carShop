import React from 'react';
import { TextFeatureStyles } from './TextFeature.Styles';

export default function TextFeature({ svg, title, paragraph }) {
  return (
    <TextFeatureStyles>
      <div class='textFeatureSvgContainer'>
        <img src={svg} alt='Icon' />
      </div>
      <div className='textFeatureTextContainer'>
        <p className='title02'>{title}</p>
        <p className='body02'>{paragraph}</p>
      </div>
    </TextFeatureStyles>
  );
}
