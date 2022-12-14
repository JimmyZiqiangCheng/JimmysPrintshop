import styled from "styled-components";
export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  margin: 80px auto 50px;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  min-width: 400px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  .header-block {
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const CartItemContainer = styled.div`
  max-height: 500px;
  overflow: scroll;
`;

export const TotalAmount = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
