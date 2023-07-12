import React from 'react';
import { TeamSectionStyles } from './TeamSection.Styles';
import PersonCard from '../../components/personCard/PersonCard';
import man1 from '../../../assets/images/man1.png';
import man2 from '../../../assets/images/man2.png';
import man3 from '../../../assets/images/man3.png';
import man4 from '../../../assets/images/man4.png';
import woman1 from '../../../assets/images/woman1.png';
import woman2 from '../../../assets/images/woman2.png';

export default function TeamSection() {
  return (
    <TeamSectionStyles>
      <h1>Meet our Team</h1>
      <div className='peopleContainer'>
        <PersonCard
          title={'Javena Melo'}
          text={'Founder, Director'}
          img={man1}
        />
        <PersonCard title={'Paul Honson'} text={'Head Technician'} img={man2} />
        <PersonCard title={'Devon Lane'} text={'Technician'} img={man3} />
        <PersonCard
          title={'Jalen Davies'}
          text={'Marketing Manager'}
          img={man4}
        />
        <PersonCard
          title={'Kylee Danford'}
          text={'Sales Manager'}
          img={woman1}
        />
        <PersonCard
          title={'Luisa Wilson'}
          text={'Support Assistant'}
          img={woman2}
        />
      </div>
    </TeamSectionStyles>
  );
}
