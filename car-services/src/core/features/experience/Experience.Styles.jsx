import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const ExperienceStyles = styled.section`
  display: flex;

  padding: 64px 14%;
  justify-content: space-between;
  background-color: ${theme.colors.lightGrey};
  h2 {
    color: ${theme.colors.secondary};
    margin: 0px;
  }
  p {
    font-size: ${theme.fontSizes.title02};
    color: ${theme.colors.black};
  }
`;
