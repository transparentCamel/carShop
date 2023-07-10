import React from 'react';
import phone from '../../../../assets/images/Assistance_Icon.svg';
import { PhoneCardStyles } from './PhoneCard.Styles';
import { useTranslation } from 'react-i18next';
import '../../../translations/translations.jsx';

export default function PhoneCard() {
  const { t } = useTranslation();
  return (
    <PhoneCardStyles>
      <div>
        <img src={phone} alt='Phone'></img>
      </div>
      <div>
        <p>{t('roadAssistance')}</p>
        <p>1800 265 24 52</p>
      </div>
    </PhoneCardStyles>
  );
}
