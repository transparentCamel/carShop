import styled from 'styled-components';

export const ButtonStyles = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 16px, 40px, 16px, 40px;
  max-width: 177px;
  height: 64px;
  border: none;
  border-radius: 12px;
  color: #ffff;
`;
