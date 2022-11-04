import styled from "styled-components";

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;
export const OrderSummaryContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
export const OrderSummaryTable = styled.table`
  display: flex;
  justify-content: center;
  width: 800px;
  td,
  th {
    text-align: left;
    padding: 8px;
  }
  img {
    width: 120px;
    height: 120px;
  }
`;

export const PaymentContainer = styled.div`
  height: 100px;
  min-width: 500px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
