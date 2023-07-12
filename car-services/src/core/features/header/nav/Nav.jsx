import React from 'react';
import { NavStyles } from './Nav.Styles';
import PhoneCard from '../phoneCard/PhoneCard';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <NavStyles>
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
        <div id='line'></div>
        <PhoneCard />
      </ul>
    </NavStyles>
  );
}
