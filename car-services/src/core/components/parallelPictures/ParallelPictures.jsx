import React from 'react';
import { ParallelPicturesStyles } from './ParallelPictures.Styles';

export default function ParallelPictures({ imgLeft, imgRight, className }) {
  return (
    <ParallelPicturesStyles className={className}>
      <div>
        <img src={imgLeft} alt='Car' />
      </div>
      <div>
        <img src={imgRight} alt='Car' />
      </div>
    </ParallelPicturesStyles>
  );
}
