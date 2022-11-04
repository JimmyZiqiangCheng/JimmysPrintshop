import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 60%;
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: center;
  border: 1px solid black;
  border-radius: 20px;

  img {
    height: 20px;
  }
`;

export const InputField = styled.input`
  width: 90%;
  height: 40px;
  font-size: 22px;
  border: none;
  &:focus {
    outline: none;
  }
`;
