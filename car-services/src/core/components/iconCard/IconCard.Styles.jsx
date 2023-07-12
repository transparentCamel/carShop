import styled from 'styled-components';

export const IconCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || 'white'};
  color: ${(props) => props.color || 'black'};
`;
