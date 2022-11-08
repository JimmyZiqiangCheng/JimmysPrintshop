import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  gap: 24px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  cursor: pointer;
  span {
    font-size: 18px;
    font-weight: normal;
    position: relative;
    transition: 0.2s;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: -0.1rem;
      left: 0;
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

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
