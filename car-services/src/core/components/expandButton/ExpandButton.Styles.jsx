import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const ExpandButtonStyles = styled.button`
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 52px;
  color: white;
  border: none;
  font-size: 24px;
`;
