import styled from 'styled-components';

export const PhoneCardStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 42px;

  :first-child {
    margin-right: 8px;
    display: flex;
    align-items: center;
  }
  :nth-child(2) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  p {
    margin: 0px;
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;
