import styled from 'styled-components';

export const ServicesSectionStyles = styled.section`
  display: flex;
  flex-direction: row;
  padding: 128px 14%;
  background-color: #f5f5f5;
  gap: 32px;
  .readMoreCard {
    width: 50%;
  }
  .servicesSectionIconCardContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    width: 50%;
  }
`;
