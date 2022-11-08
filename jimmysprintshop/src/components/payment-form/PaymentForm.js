import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/Cart/cart-selector";
import { selectCurrentUser } from "../../store/User/user-selector";

import { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  OrderSummaryContainer,
  PaymentFormContainer,
  OrderSummaryTable,
  PaymentContainer,
  ButtonContainer,
  PaymentButton,
  CardElementContainer,
} from "./payment-form.styles";

const PaymentForm = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessing(true);
    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            amount: cartTotal * 100,
          }),
        }
      );
      const result = await response.json();
      const clientSecret = result.paymentIntent.client_secret;
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : "guest",
          },
        },
      });

      setIsProcessing(false);

      if (paymentResult.error) {
        alert("Payment Failed");
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Sucessful");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PaymentFormContainer>
      <OrderSummaryContainer>
        <h1>Order Summary</h1>
        <OrderSummaryTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Detail</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          {cartItems.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>{item.name}</td>
                <td>
                  <img src={item.imageUrl} alt={item.name} />
                </td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            </tbody>
          ))}
        </OrderSummaryTable>
        <h2>Total: ${cartTotal}</h2>
      </OrderSummaryContainer>
      <PaymentContainer onSubmit={handlePay}>
        <h2>Credit Card Payment: </h2>
        <CardElementContainer />
        <ButtonContainer>
          <PaymentButton
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.white}
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </PaymentButton>
          <PaymentButton isLoading={isProcessing}>Confirm</PaymentButton>
        </ButtonContainer>
      </PaymentContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
