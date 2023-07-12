import styled from 'styled-components';

export const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  ul,
  li,
  a {
    text-decoration: none;
    color: black;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul {
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
