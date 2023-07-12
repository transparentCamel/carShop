import React from 'react';
import { ColorSectionStyles } from './ColorSection.Styles';
import ColorOverlay from '../../components/colorOverlay/ColorOverlay';
import car from '../../../assets/images/miataBig.png';
import jumpLeads from '../../../assets/images/jumpLeads.png';
import { theme } from '../../globalStyles/Theme';

export default function ColorSection() {
  return (
    <ColorSectionStyles>
      <ColorOverlay
        image={car}
        heading={'Serve our customers and always deliver the customer service'}
        paragraph={
          'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes '
        }
        backgroundColor={theme.colors.primary}
      />
      <ColorOverlay
        image={jumpLeads}
        heading={
          'To be the world’s most eader in automotive business solutions.'
        }
        paragraph={
          'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes '
        }
        backgroundColor={theme.colors.black}
      />
      <ColorOverlay
        image={jumpLeads}
        heading={
          'We value the service we provide and our loyal returning customers '
        }
        paragraph={
          'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes '
        }
        backgroundColor={theme.colors.secondary}
      />
    </ColorSectionStyles>
  );
}
