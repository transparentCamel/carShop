import React from 'react';
import { HeaderStyles } from './Header.Styles';
import Logo from '../../components/logo/logo/Logo';
import Nav from './nav/Nav';
export default function Header() {
  return (
    <HeaderStyles>
      <div className='headerContainer'>
        <Logo />
        <Nav />
      </div>
    </HeaderStyles>
  );
}
