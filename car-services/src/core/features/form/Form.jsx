import React from 'react';
import { FormStyles } from './Form.Styles';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { theme } from '../../globalStyles/Theme';

export default function Form({
  headingText,
  buttonText,
  firstPlaceholder,
  secondPlaceholder,
  thirdPlaceholder,
  fourthPlaceholder,
  firstInpuType,
  secondInpuType,
  thirdInpuType,
  fourthInpuType,
  backgroundColor,
}) {
  return (
    <FormStyles>
      <h3>{headingText}</h3>
      <div className='inputContainer'>
        <Input
          inputType={firstInpuType}
          placeholder={firstPlaceholder}
          backgroundColor={backgroundColor || 'white'}
        />
        <Input
          inputType={secondInpuType}
          placeholder={secondPlaceholder}
          backgroundColor={backgroundColor || 'white'}
        />
        <Input
          inputType={thirdInpuType}
          placeholder={thirdPlaceholder}
          backgroundColor={backgroundColor || 'white'}
        />
        <Input
          inputType={fourthInpuType}
          placeholder={fourthPlaceholder}
          backgroundColor={backgroundColor || 'white'}
        />
      </div>
      <Button backgroundColor={theme.colors.primary} text={buttonText} />
    </FormStyles>
  );
}
