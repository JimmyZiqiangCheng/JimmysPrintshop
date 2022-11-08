import styled from "styled-components";
import Button from "../../components/button/Button";

export const ProductDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 80vh;
  margin-bottom: 50px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding: 40px;
  height: 100%;
  text-align: center;
  overflow: scroll;
  img {
    width: 90%;
    max-width: 800px;
  }
  border-right: 1px solid #ddd;
`;
export const ImageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 20%;
`;

export const SelectOption = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SelectedOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AddToCartButton = styled(Button)`
  width: 200px;
`;
