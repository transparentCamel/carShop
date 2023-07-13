import React from 'react';
import { BlogHeaderStyles } from './BlogHeader.Styles';
import Button from '../../components/button/Button';
import { theme } from '../../globalStyles/Theme';
import formula from '../../../assets/images/formula.png';

export default function BlogHeader() {
  return (
    <BlogHeaderStyles>
      <div className='blogHeaderLeft'>
        <div className='formulaContainer'>
          <img src={formula} alt='Formula' />
        </div>

        <div className='overlay'></div>
        <h1>Our Blog</h1>
      </div>
      <div className='blogHeaderRight'>
        <p id='trending'>TRENDING</p>
        <h4>Diagnose Car Problems If You Don’t Know Much About Cars</h4>
        <p>
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes, We provide a
          full range of front end mechanical.
        </p>
        <div className='blogButtonContainer'>
          <Button backgroundColor={theme.colors.primary} text={'Read more'} />
          <p>Posted on October 6th 2021</p>
        </div>
      </div>
    </BlogHeaderStyles>
  );
}
