import React from 'react';
import { HowSectionStyles } from './HowSection.Styles';
import ParallelPictures from '../../components/parallelPictures/ParallelPictures';
import Button from '../../components/button/Button';
import CheckedProcesses from '../../components/checkedProcesses/CheckedProcesses';
import golf from '../../../assets/images/golf.png';
import wheelChange from '../../../assets/images/wheelChange.png';
import sportWheel from '../../../assets/images/sportWheel.png';
import nissan from '../../../assets/images/nissan.png';
import { theme } from '../../globalStyles/Theme';

export default function HowSection() {
  return (
    <HowSectionStyles>
      <div className='firstHowContainer'>
        <div className='firstHowContainerLeft'>
          <div>
            <h3>How we work and the process we follow</h3>
          </div>
          <CheckedProcesses
            text={'Through True Rich Attended does no end it his mother since'}
          />
          <CheckedProcesses
            text={
              'Attended does no end it his mother since real had half every'
            }
          />
          <CheckedProcesses
            text={
              'Since real had half every him case in packages enquire we up ecstatic'
            }
          />
        </div>

        <ParallelPictures
          imgLeft={golf}
          imgRight={wheelChange}
          className='parallelPicturesRight'
        />
      </div>
      <div className='secondHowContainer'>
        <ParallelPictures
          imgLeft={sportWheel}
          imgRight={nissan}
          className='parallelPicturesLeft'
        />
        <div className='secondHowContainerRight'>
          <h3>Diagnose Car Problems If You Don’t Know Much About Cars</h3>
          <p>
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes
            everything from struts, shocks, and tie rod ends to ball joints,
            springs everything from struts, shocks, and tie rod ends to ball
            joints, springs
          </p>
          <Button
            backgroundColor={theme.colors.primary}
            text={'Book a service'}
          />
        </div>
      </div>
    </HowSectionStyles>
  );
}
