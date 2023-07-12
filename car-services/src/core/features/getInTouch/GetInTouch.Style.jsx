import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const GetInTouchStyles = styled.section`
  display: flex;
  background-color: ${theme.colors.black};
  opacity: 98%;
  padding: 128px 14%;
  color: white;
  justify-content: space-between;

  .getInTouchLeftContainer {
    opacity: 98%;
    display: flex;
    flex-direction: column;
    max-width: 512px;

    h3 {
      margin: 0px;
    }
    .socialIconsContainer {
      display: flex;
      gap: 16px;
      margin-top: 64px;
    }
  }
`;
