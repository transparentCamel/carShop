import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const ReadMoreCardStyles = styled.div`
  padding: 32px;
  background-color: white;
  .readMoreCardImageContainer {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
  .readMoreCardBody {
    margin-bottom: 64px;
    font-size: ${theme.fontSizes.title02};
  }
`;
