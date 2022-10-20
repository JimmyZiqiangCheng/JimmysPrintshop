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
`;

export const NavLinksContainer = styled.div`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  gap: 24px;
  .nav-link {
    cursor: pointer;
  }
`;
