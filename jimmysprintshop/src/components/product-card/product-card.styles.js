import styled from "styled-components";
export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  overflow: hidden;

  button {
    width: 80%;
    opacity: 0.9;
    position: absolute;
    top: 255px;
    text-transform: none;
    transform: scale(0);
    transition: 0.5s;
  }

  &:hover {
    img {
      opacity: 0.8;
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.55, 0.55, 0.95);
    }

    button {
      opacity: 0.75;
      transform: scale(1);
      transform-origin: bottom;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  height: 5%;
  font-size: 18px;

  .name {
    width: 100%;
    margin-bottom: 15px;
    text-align: center;
  }
`;
