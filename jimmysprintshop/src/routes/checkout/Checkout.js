import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/Cart/cart-selector";
import Button from "../../components/button/Button";
import "./checkout.styles.scss";

const headerItems = ["Product", "Description", "Quantity", "Price", "Remove"];
const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigate = useNavigate();
  const handlePay = () => navigate("/payment");
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-header">
        {headerItems.map((headerItem, i) => (
          <div key={i} className="header-block">
            <span>{headerItem}</span>
          </div>
        ))}
      </div>
      <div className="cart-items-container">
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
      </div>
      <span className="total"> Total: ${cartTotal}</span>
      <Button onClick={handlePay}> Check Out </Button>
    </div>
  );
};

export default Checkout;
