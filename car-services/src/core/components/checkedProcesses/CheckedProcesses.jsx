import React from 'react';
import { CheckedProcessesStyles } from './CheckedProcesses.Styles';
import checkMark from '../../../assets/images/Checkmark.svg';

export default function CheckedProcesses({ text }) {
  return (
    <CheckedProcessesStyles>
      <div>
        <img src={checkMark} alt='Check Icon' />
      </div>

      <p>{text}</p>
    </CheckedProcessesStyles>
  );
}
