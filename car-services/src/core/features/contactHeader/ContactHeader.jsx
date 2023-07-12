import React from 'react';
import { ContactHeaderStyles } from './ContactHeader.Style';
import Form from '../form/Form';
import GeneralInfo from '../../components/generalInfo/GeneralInfo';

export default function ContactHeader() {
  return (
    <ContactHeaderStyles>
      <h1>Get in touch with our experts</h1>
      <div className='contactContainer'>
        <Form
          buttonText={'Send message'}
          firstPlaceholder={'Your Full Name'}
          secondPlaceholder={'Your Email'}
          thirdPlaceholder={'Select service type'}
          fourthPlaceholder={'message'}
          firstInpuType={'text'}
          secondInpuType={'text'}
          thirdInpuType={'text'}
          fourthInpuType={'text'}
          backgroundColor={'#F2F2F2'}
        />
        <GeneralInfo />
      </div>
    </ContactHeaderStyles>
  );
}
