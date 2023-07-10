import React from 'react';
import { BrandsStyles } from './Brands.Styles';
import logo1 from '../../../assets/images/logo1.png';
import logo2 from '../../../assets/images/logo2.png';
import logo3 from '../../../assets/images/logo3.png';
import logo4 from '../../../assets/images/logo4.png';

export default function Brands() {
  return (
    <BrandsStyles>
      <h3>Brands we Serve</h3>
      <div className='brandsContainer'>
        <div className='brandsFirstRow'>
          <div className='brandsImgContainer'>
            <img src={logo1} alt='Brand Logo' />
          </div>
          <div className='brandsImgContainer'>
            <img src={logo2} alt='Brand Logo' />
          </div>
          <div className='brandsImgContainer'>
            <img src={logo3} alt='Brand Logo' />
          </div>
          <div className='brandsImgContainer'>
            <img src={logo4} alt='Brand Logo' />
          </div>
        </div>
        <div className='brandsSecondRow'>
          <div className='brandsImgContainer'>
            <img src={logo1} alt='Brand Logo' />
          </div>
          <div className='brandsImgContainer'>
            <img src={logo2} alt='Brand Logo' />
          </div>
          <div className='brandsImgContainer'>
            <img src={logo3} alt='Brand Logo' />
          </div>
          <div className='brandsImgContainer'>
            <img src={logo4} alt='Brand Logo' />
          </div>
        </div>
      </div>
    </BrandsStyles>
  );
}
