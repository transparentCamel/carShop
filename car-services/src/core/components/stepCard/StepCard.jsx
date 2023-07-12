import React from 'react';
import { StepCardStyles } from './StepCard.Styles';
import dottedLine from '../../../assets/images/dottedLine.svg';

export default function StepCard({ title, paragraph, svgBubble, withLines }) {
  return (
    <StepCardStyles>
      {withLines ? (
        <>
          <div className='bubbleContainer'>
            <div className='circleImageContainer'>
              <img src={svgBubble} alt='Bubble' />
            </div>
            <div>
              <img src={dottedLine} alt='Dots' />
            </div>
          </div>
          <div className='stepCardTextContainer'>
            <p>{title}</p>
            <p>{paragraph}</p>
          </div>
        </>
      ) : (
        <>
          <div className='bubbleContainer'>
            <div className='circleImageContainer'>
              <img src={svgBubble} alt='Bubble' />
            </div>
          </div>
          <div className='stepCardTextContainer'>
            <p>{title}</p>
            <p>{paragraph}</p>
          </div>
        </>
      )}
    </StepCardStyles>
  );
}
