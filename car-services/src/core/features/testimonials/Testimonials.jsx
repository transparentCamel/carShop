import React from 'react';
import { TestimonialsStyles } from './Testimonials.Styles';
import personOne from '../../../assets/images/personOne.png';
import personTwo from '../../../assets/images/personTwo.jpg';
import sliders from '../../../assets/images/Sliders.svg';

export default function Testimonials() {
  return (
    <TestimonialsStyles>
      <div className='testimonialHeading'>
        <h3>Our customers say the nicest things about our service</h3>
      </div>

      <div className='testimonialCardContainer'>
        <div className='testimonialCard'>
          <div>
            <div className='testimonialUserInfo'>
              <div className='testimonialImgContainer'>
                <img src={personOne} alt='Face' />
              </div>
              <div className='testimonialUserInfoText'>
                <p>Jonathan Vallem</p>
                <p>New york</p>
              </div>
            </div>
          </div>
          <p className='testimonialReviewText'>
            I have got my car repaired at Finsweet many times before, they are
            good at what they do. Not only did they repair my car in a short
            comprehensive look on all the working
          </p>
        </div>
        <div className='testimonialCard'>
          <div>
            <div className='testimonialUserInfo'>
              <div className='testimonialImgContainer'>
                <img src={personTwo} alt='Face' />
              </div>
              <div className='testimonialUserInfoText'>
                <p>Smith Johnson</p>
                <p>New york</p>
              </div>
            </div>
          </div>
          <p className='testimonialReviewText'>
            I have got my car repaired at Finsweet many times before, they are
            good at what they do. Not only did they repair my car in a short
            comprehensive look on all the working
          </p>
        </div>
      </div>
      <div className='testimonialNav'>
        <div id='centerElement'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id='endElement'>
          <img src={sliders} alt='Sliders' />
        </div>
      </div>
    </TestimonialsStyles>
  );
}
