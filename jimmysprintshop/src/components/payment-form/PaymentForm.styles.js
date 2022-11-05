import styled from "styled-components";
import Button from "../button/Button";
import { CardElement } from "@stripe/react-stripe-js";

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  width: 100%;
`;
export const OrderSummaryContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
export const OrderSummaryTable = styled.table`
  width: 100%;
  max-height: 480px;
  overflow: scroll;
  display: block;
  border: 0.8px solid black;
  padding: 10px;
  td,
  th {
    width: 80%;
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  img {
    width: 120px;
    height: 80px;
  }
`;

export const PaymentContainer = styled.form`
  height: 100px;
  min-width: 500px;
  h2 {
    margin-bottom: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
`;

export const PaymentButton = styled(Button)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const CardElementContainer = styled(CardElement)`
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
`;
