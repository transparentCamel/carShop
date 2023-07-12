import React from 'react';
import { FooterStyles } from './Footer.Styles';
import logo from '../../../assets/images/logoWhite.svg';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <FooterStyles>
      <img src={logo} alt='Logo' />
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About us</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <p>@ Copyright Finsweet 2021</p>
    </FooterStyles>
  );
}
