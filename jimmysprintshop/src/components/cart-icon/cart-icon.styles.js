import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 1;
  }
`;

export const CartSVG = styled(Icon)`
  width: 32px;
  height: 32px;
`;

export const ItemCountContainer = styled.div`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 8px;
`;
