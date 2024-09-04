import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #00c6bd;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -1.5px;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 0.25rem;
  background: #874CCC;
  padding: 0.625rem 1.375rem;
  color:#fff;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border: 1rem;
  border-radius: 1rem 2rem 3rem 4rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #F27BBD;
    color: #fff;
        border-radius: 4rem 3rem 2rem 1rem;
  }
`;
export const Navlogo = styled.img`
  width: 100%;
`;

export const HandleLogo = styled.div`
  max-width: 10rem;
  color: #7CB9E8;
  font-weight: bold;
  font-size: 2rem;
  margin-left: 1.5rem;
  font-family: "Orbitron";
`;
export const YellowColor = styled.span`
  color: #f9f871;
`;
