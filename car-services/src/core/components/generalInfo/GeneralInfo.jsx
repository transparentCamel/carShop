import React from 'react';
import { GeneralInfoStyles } from './GeneralInfo.Styles';

export default function GeneralInfo() {
  return (
    <GeneralInfoStyles>
      <div>
        <p className='body01'>Help line Noumber</p>
        <p className='title02'>1800 265 24 52</p>
      </div>
      <div>
        <p className='body01'>Adress</p>
        <p className='title02'>NH 234 Public Square San Francisco 65368</p>
      </div>
      <div>
        <p className='body01'>We are Open</p>
        <p className='title02'>Monday to Friday 9:00 AM to  10:00  AM</p>
      </div>
    </GeneralInfoStyles>
  );
}
