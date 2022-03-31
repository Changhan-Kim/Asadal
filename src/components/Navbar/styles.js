import styled from "@emotion/styled";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #c40007;
  height: 120px;
  margin-top: -150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 2100px;

`;

export const NavLogo = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export const NavHome = styled.img`
  height: 70px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  padding: 0 1.5rem;
  height: 100%;
  color: #000;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s all ease;

  &:hover {
    color: #fff;
    opacity: 90%;
  }
  &.active {
    color: #fff;
    opacity: 90%;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavInstagram = styled.img`
  cursor: pointer;
  height: 50px;
  &:hover {
    background-color: #fff;
    border-radius: 20px;
    opacity: 90%;
  }
`;
