import styled from "styled-components";

export const NavStyles = styled.nav`
  width: auto;
  height: 80px;
  border-bottom: 1px solid seashell;
`;

export const Logo = styled.img`
  width: auto;
  height: 50px;
`;

export const NavLinks = styled.nav`
  color: seashell;
  display: flex;
`;

export const NavLink = styled.nav`
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
  margin: 10px;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 769px) {
    color: #fff;
    background-color: #000;
    margin-top: 30px;
    text-decoration: none;
  }
`;
