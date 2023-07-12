import React from 'react';
import { AutoDiagnosticsHeaderStyles } from './AutoDiagnosticsHeader.Styles';
import TextFeature from '../textFeature/TextFeature';
import wrench from '../../../assets/images/wrenchIconTextFeature.svg';
import mechanic from '../../../assets/images/mechanicIconTextFeature.svg';
import dollar from '../../../assets/images/dollarIconTextFeature.svg';
import battery from '../../../assets/images/batteryIcon.svg';
import carIcon from '../../../assets/images/carIcon.svg';
import gear from '../../../assets/images/gearIcon.svg';
import IconCard from '../../components/iconCard/IconCard';
import carWheel from '../../../assets/images/carWheelLong.png';

export default function AutoDiagnosticsHeader() {
  return (
    <AutoDiagnosticsHeaderStyles>
      <h1>Auto Diagnostics</h1>
      <div className='diagnosticsMainContainer'>
        <div className='diagnosticsLeftContainer'>
          <div className='otherServicesContainer'>
            <p className='title01'>Other Services</p>
            <IconCard text={'Engine Repair'} icon={gear} />
            <IconCard text={'Car Wash'} icon={carIcon} />
            <IconCard text={'Batteries'} icon={battery} />
          </div>
          <div>
            <TextFeature
              svg={wrench}
              title={'Convenient service'}
              paragraph={
                'Through True Rich Attended does no end it his mother since real had half every him.'
              }
            />
            <TextFeature
              svg={mechanic}
              title={'Expert mechanics'}
              paragraph={
                'Through True Rich Attended does no end it his mother since real had half every him.'
              }
            />
            <TextFeature
              svg={dollar}
              title={'Transparent pricing'}
              paragraph={
                'Through True Rich Attended does no end it his mother since real had half every him.'
              }
            />
          </div>
        </div>
        <div className='diagnosticsRightContainer'>
          <div>
            <img src={carWheel} alt='Car' />
          </div>
          <h4>
            The warning lights on your dashboard are the most obvious starting
            point.
          </h4>
          <p className='body02 firstPara'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </p>
          <p className='body02 secondPara'>
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.
          </p>
          <p className='title01'>
            Delaying a diagnosis and repair could lead to even bigger problems
            down the road.
          </p>
          <p className='body02'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </p>
          <p className='body01'>
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante.
          </p>
        </div>
      </div>
    </AutoDiagnosticsHeaderStyles>
  );
}
