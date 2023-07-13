import React from 'react';
import { BlogFullSectionStyles } from './BlogFullSection.Styles';
import ReadMoreCard from '../../components/readMoreCard/ReadMoreCard';
import speed from '../../../assets/images/speed.png';
import golfWide from '../../../assets/images/golfWide.png';
import pireli from '../../../assets/images/pireli.png';
import dashboard from '../../../assets/images/dashboard.png';
import tools from '../../../assets/images/tools.png';
import carInside from '../../../assets/images/carInside.png';

export default function BlogFullSection() {
  return (
    <BlogFullSectionStyles>
      <ReadMoreCard
        posted={true}
        img={speed}
        title={'5 Genius Car Accessories You Should Never Drive Without'}
        paragraph={
          'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.'
        }
        datePosted={'Posted on October 6th 2021'}
        arrow={false}
        arrowText={'Read more'}
      />
      <ReadMoreCard
        posted={true}
        img={dashboard}
        title={'5 Genius Car Accessories You Should Never Drive Without'}
        paragraph={
          'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.'
        }
        datePosted={'Posted on October 6th 2021'}
        arrow={false}
        arrowText={'Read more'}
      />
      <ReadMoreCard
        posted={true}
        img={tools}
        title={'We provide blow straight past it with the wheels skidding'}
        paragraph={
          'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.'
        }
        datePosted={'Posted on October 6th 2021'}
        arrow={false}
        arrowText={'Read more'}
      />
      <ReadMoreCard
        posted={true}
        img={pireli}
        title={'We provide blow straight past it with the wheels skidding'}
        paragraph={
          'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.'
        }
        datePosted={'Posted on October 6th 2021'}
        arrow={false}
        arrowText={'Read more'}
      />
      <ReadMoreCard
        posted={true}
        img={carInside}
        title={'5 Genius Car Accessories You Should Never Drive Without'}
        paragraph={
          'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.'
        }
        datePosted={'Posted on October 6th 2021'}
        arrow={false}
        arrowText={'Read more'}
      />
      <ReadMoreCard
        posted={true}
        img={golfWide}
        title={'5 Genius Car Accessories You Should Never Drive Without'}
        paragraph={
          'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.'
        }
        datePosted={'Posted on October 6th 2021'}
        arrow={false}
        arrowText={'Read more'}
      />
    </BlogFullSectionStyles>
  );
}
