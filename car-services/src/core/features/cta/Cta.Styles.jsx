import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const CtaStyles = styled.section`
  display: flex;
  height: 502px;

  .carImageContainer {
    max-width: 14%;
  }
  .ctaTextContainer {
    background-color: ${theme.colors.primary};
    display: flex;
    flex-direction: column;
    padding: 32px 64px 32px 64px;
    color: white;
    min-width: 512px;
  }
  .jumpLeadsContainer {
    max-width: 56%;
  }
`;
