import React from 'react';
import { MapSectionStyles } from './MapSection.Styles';
import map from '../../../assets/images/map.png';
import garage from '../../../assets/images/garage.png';

export default function MapSection() {
  return (
    <MapSectionStyles>
      <img src={map} alt='Map' />
      <img src={garage} alt='Garage' />
    </MapSectionStyles>
  );
}
