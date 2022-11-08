import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const LogoContainer = styled(Link)`
  border: 1px solid black;
  .logo {
    width: 36px;
    height: 36px;
  }
  transition: 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 0.9;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  gap: 24px;
  .nav-link {
    cursor: pointer;
    position: relative;
    transition: 0.3s ease-in-out;
    &:hover {
      scale: 1.1;
    }
    &:active {
      scale: 0.9;
    }
    &::after {
      content: "";
      position: absolute;
      width: 90%;
      transform: scaleX(0);
      height: 1px;
      bottom: -0.4em;
      left: 5%;
      background-color: black;
      transform-origin: bottom;
      transition: transform 0.3s ease-out;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom;
    }
  }
`;
