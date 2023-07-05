import React from 'react';
import { LearnMoreArrowStyles } from './LearnMoreArrow.Syle';
import arrow from '../../../assets/Arrow.svg';

export default function LearnMoreArrow({ text }) {
  return (
    <LearnMoreArrowStyles className='learnMoreArrowContainer'>
      <p>{text}</p>
      <div>
        <img src={arrow} alt='Arrow' />
      </div>
    </LearnMoreArrowStyles>
  );
}
