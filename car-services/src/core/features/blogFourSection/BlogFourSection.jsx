import React from 'react';
import { BlogFourSectionStyles } from './BlogFourSection.Style';
import ReadMoreCard from '../../components/readMoreCard/ReadMoreCard';
import HeadlineCard from '../../components/headlineCard/HeadlineCard';
import gtr from '../../../assets/images/gtrSnow.png';
import wheelWash from '../../../assets/images/wheelWash.png';
import redAudi from '../../../assets/images/redAudi.png';
import silverAudi from '../../../assets/images/silverAudi.png';

export default function BlogFourSection() {
  return (
    <BlogFourSectionStyles>
      <div className='blogFourLeft'>
        <ReadMoreCard
          posted={true}
          img={silverAudi}
          title={'Should I Buy a New Car or Lease a New Car in 2021?'}
          paragraph={
            'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.'
          }
          datePosted={'Posted on October 6th 2021'}
          arrow={true}
          arrowText={'Read more'}
        />
      </div>
      <div className='headlineCardContainer'>
        <HeadlineCard
          image={gtr}
          headline={'Get an Awesome Number Plate for Your New Car'}
          body={'Posted on October 6th 2021'}
        />
        <HeadlineCard
          image={wheelWash}
          headline={'Would you Let a Robot Drive your Car? Our AI Future'}
          body={'Posted on October 6th 2021'}
        />
        <HeadlineCard
          image={redAudi}
          headline={'Will Electric Technology Soon Rule The Road?'}
          body={'Posted on October 6th 2021'}
        />
      </div>
    </BlogFourSectionStyles>
  );
}
