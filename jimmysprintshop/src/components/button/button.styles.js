import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  background-color: black;
  color: white;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const BlueButton = styled(BaseButton)`
  background-color: white;
  color: #4285f4;
  border: 1px solid #4285f4;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #4285f4;
    color: white;
    border: none;
  }
`;

export const WhiteButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
