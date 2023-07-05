import React from 'react';
import { InputStyles } from './Input.Styles';

export default function Input({
  placeholder,
  color,
  backgroundColor,
  inputType,
}) {
  return (
    <InputStyles
      type={inputType}
      placeholder={placeholder}
      color={color}
      backgroundColor={backgroundColor}
    />
  );
}
