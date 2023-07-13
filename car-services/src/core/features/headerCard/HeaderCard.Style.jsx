import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const HeaderCardStyles = styled.header`
  display: flex;
  padding: 128px 14%;
  color: white;

  .headerCardContainer {
    display: flex;

    .headerCardImageContainer {
      display: flex;

      img {
        width: 100%;
        object-fit: cover;
      }
    }

    .headerCardTextContainer {
      width: 60%;
      display: flex;
      flex-direction: column;
      padding: 64px;
      background-color: ${theme.colors.black};

      p {
        padding-right: 200px;
        margin-bottom: 32px;
      }
    }
  }
`;
