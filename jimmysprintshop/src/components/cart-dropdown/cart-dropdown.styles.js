import styled from "styled-components";
import { BaseButton, BlueButton, WhiteButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 360px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 60px;
  right: 10px;
  z-index: 5;

  ${BaseButton},
  ${BlueButton},
  ${WhiteButton} {
    margin-top: auto;
  }
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const TotalItem = styled.span`
  font-size: 22px;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  overflow: scroll;
`;
