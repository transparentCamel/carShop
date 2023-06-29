import React from 'react';
import { LogoStyles } from './Logo.Styles';
import logo from '../../../../assets/Logo.svg';

export default function Logo() {
  return (
    <LogoStyles>
      <img src={logo} alt='Logo'></img>
    </LogoStyles>
  );
}
