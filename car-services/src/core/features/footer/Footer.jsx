import React from 'react';
import { FooterStyles } from './Footer.Styles';
import logo from '../../../assets/images/logoWhite.svg';

export default function Footer() {
  return (
    <FooterStyles>
      <img src={logo} alt='Logo' />
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <p>@ Copyright Finsweet 2021</p>
    </FooterStyles>
  );
}
