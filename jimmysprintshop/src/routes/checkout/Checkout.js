import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/Cart/cart-selector";
import "./checkout.styles.scss";

const headerItems = ["Product", "Description", "Quantity", "Price", "Remove"];
const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {headerItems.map((headerItem, i) => (
          <div key={i} className="header-block">
            <span>{headerItem}</span>
          </div>
        ))}
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="total"> Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
