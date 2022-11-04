import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/Cart/cart-selector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  OrderSummaryContainer,
  PaymentFormContainer,
  OrderSummaryTable,
  PaymentContainer,
  ButtonContainer,
} from "./PaymentForm.styles";

const PaymentForm = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const stripe = useStripe();
  const elements = useElements();
  const handlePay = async (event) => {
    event.preventDefault();
    if (!stripe || elements) return;
  };
  return (
    <PaymentFormContainer>
      <OrderSummaryContainer>
        <h1>Order Summary</h1>
        <OrderSummaryTable>
          <tr>
            <th>Name</th>
            <th>Detail</th>
            <th>Price</th>
            <th>Quantity</th>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <img src={item.imageUrl} alt={item.name} />
                </td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tr>
        </OrderSummaryTable>
        <h2>Total: ${cartTotal}</h2>
      </OrderSummaryContainer>
      <PaymentContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <ButtonContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.white}>Go Back</Button>
          <Button>Confirm</Button>
        </ButtonContainer>
      </PaymentContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
