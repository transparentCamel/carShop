import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const BrandsStyles = styled.section`
  display: flex;
  flex-direction: column;
  padding: 128px 14%;
  h3 {
    font-size: ${theme.fontSizes.h3};
    text-align: center;
    margin-bottom: 128px;
  }
  .brandsContainer {
    display: flex;
    flex-direction: column;
    .brandsFirstRow {
      display: flex;
      justify-content: space-between;
      margin-bottom: 64px;
    }
    .brandsSecondRow {
      display: flex;
      justify-content: space-between;
    }
  }
`;
