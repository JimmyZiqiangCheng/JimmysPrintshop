import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const BodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  gap: 3px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: 300;
    font-size: 16px;
  }
`;

export const DirectoryCardContainer = styled.div`
  min-width: 30%;
  height: 360px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid black;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.55, 0.55, 0.95);
    }

    & ${BodyContainer} {
      transform: scale(1.2);
      transform-origin: center;
      opacity: 0.9;
      transition: 0.3s ease-in-out;

      &:hover {
        opacity: 0.85;
        background-color: black;
        color: white;
        h2 {
          transition: 0.3s ease-in-out;
          color: white;
        }
      }
    }
  }
`;
