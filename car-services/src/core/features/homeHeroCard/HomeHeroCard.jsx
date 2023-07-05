import React from 'react';
import { HomeHeroCardStyles } from './HomeHeroCard.Styles';
import Button from '../../components/button/Button';
import { theme } from '../../globalStyles/Theme';
import { useTranslation } from 'react-i18next';
import clock from '../../../assets/clock.svg';
import '../../translations/translations.jsx';
import mechanic from '../../../assets/mechanic.png';
import circle from '../../../assets/Circle.svg';
import stars from '../../../assets/Stars.svg';

export default function HomeHeroCard() {
  const { t } = useTranslation();

  return (
    <>
      <HomeHeroCardStyles>
        <section>
          <h1>{t('firstHeroMessage')}</h1>
          <Button
            backgroundColor={theme.colors.primary}
            text={t('bookService')}
          />
          <div className='openContainer'>
            <div>
              <img src={clock} alt='Clock' />
            </div>
            <div>
              <p>{t('weAreOpen')}</p>
              <p>Monday to Friday 9:00 AM to 10:00 AM</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <img src={mechanic} alt='Mechanic' />
          </div>
          <div className='stampTop'>
            <div>
              <img src={circle} alt='24hr Circle' />
            </div>

            <p>Quick service</p>
          </div>
          <div className='stampBottom'>
            <div className='ratingContainer'>
              <p className='ratingNum'>4.5/5</p>
              <p className='ratingText'>Rating</p>
            </div>
            <div className='starsContainer'>
              <img src={stars} alt='Stars' />
            </div>
          </div>
        </section>
      </HomeHeroCardStyles>
    </>
  );
}
