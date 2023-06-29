import React from 'react';
import { ButtonStyles } from './Button.Styles';

export default function Button({ text, backgroundColor }) {
  return <ButtonStyles backgroundColor={backgroundColor}>{text}</ButtonStyles>;
}
