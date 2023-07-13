import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const CtaStyles = styled.section`
  display: flex;
  height: 502px;

  .carImageContainer {
    max-width: 14%;

    object-fit: cover;
  }
  .ctaTextContainer {
    background-color: ${theme.colors.primary};
    display: flex;
    flex-direction: column;
    padding: 32px 64px 32px 64px;
    color: white;
  }
  .jumpLeadsContainer {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
