import React from 'react';
import { ReadMoreCardStyles } from './ReadMoreCard.Styles';
import LearnMoreArrow from '../../components/learnMoreArrow/LearnMoreArrow';

export default function ReadMoreCard({
  datePosted,
  posted,
  img,
  title,
  paragraph,
  arrowText,
}) {
  return (
    <ReadMoreCardStyles className='readMoreCard'>
      <div className='readMoreCardImageContainer'>
        <img src={img} alt='Post' />
      </div>
      {posted && <p className='postDate'>{datePosted}</p>}
      <h3>{title}</h3>
      <p className='readMoreCardBody'>{paragraph}</p>
      <LearnMoreArrow text={arrowText} />
    </ReadMoreCardStyles>
  );
}
