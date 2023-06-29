import styled from 'styled-components';

export const NavStyles = styled.nav`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 683px;
  }

  #line {
    height: 42px;
    width: 1px;
    background-color: #939191;
  }
`;
