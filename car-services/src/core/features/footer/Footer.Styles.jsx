import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const FooterStyles = styled.section`
  display: flex;
  padding: 64px 14%;
  background-color: ${theme.colors.black};
  color: white;
  align-items: center;
  justify-content: space-between;
  ul,
  li,
  a {
    text-decoration: none;
    color: white;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul {
    display: flex;
    gap: 32px;
  }
  p {
    color: #939191;
  }
`;
