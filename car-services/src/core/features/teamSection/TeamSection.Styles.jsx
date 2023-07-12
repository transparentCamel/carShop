import styled from 'styled-components';

export const TeamSectionStyles = styled.section`
  padding: 128px 14%;
  h1 {
    text-align: center;
    margin-bottom: 64px;
  }
  .peopleContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }
`;
