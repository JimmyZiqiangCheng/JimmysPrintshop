import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { selectCartItems, selectCartTotal } from "../../store/cart-slice";
import Button from "../../components/button/Button";
import {
  CheckoutContainer,
  CheckoutHeader,
  CartItemContainer,
  HeaderBlock,
  TotalAmount,
} from "./checkout.styles.js";

const headerItems = ["Product", "Description", "Quantity", "Price", "Remove"];
const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigate = useNavigate();
  const handlePay = () => navigate("/payment");
  return (
    <CheckoutContainer>
      <h2>Check Out</h2>
      <div>
        <CheckoutHeader>
          {headerItems.map((headerItem, i) => (
            <HeaderBlock key={i}>
              <span>{headerItem}</span>
            </HeaderBlock>
          ))}
        </CheckoutHeader>
        <CartItemContainer>
          {cartItems.map((item) => (
            <CheckoutItem key={item.name} cartItem={item} />
          ))}
        </CartItemContainer>
      </div>
      <TotalAmount> Total: ${cartTotal}</TotalAmount>
      <Button onClick={handlePay}> Check Out </Button>
    </CheckoutContainer>
  );
};

export default Checkout;
