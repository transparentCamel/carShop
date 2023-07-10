import React from 'react';
import { HeaderStyles } from './Header.Styles';
import logo from '../../../assets/images/LogoBlack.svg';
import Nav from './nav/Nav';
export default function Header() {
  return (
    <HeaderStyles>
      <div className='headerContainer'>
        <div>
          <img id='logo' src={logo} alt='Logo' />
        </div>
        <Nav />
      </div>
    </HeaderStyles>
  );
}
