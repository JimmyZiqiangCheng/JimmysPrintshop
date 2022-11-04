import styled from "styled-components";
export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 48px;
`;

export const CategoryTitle = styled.div`
  font-size: 36px;
  text-align: center;
`;
