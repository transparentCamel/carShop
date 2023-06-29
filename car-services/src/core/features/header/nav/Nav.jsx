import React from 'react';
import { NavStyles } from './Nav.Styles';
import PhoneCard from '../phoneCard/PhoneCard';

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact</li>
        <div id='line'></div>
        <PhoneCard />
      </ul>
    </NavStyles>
  );
}
