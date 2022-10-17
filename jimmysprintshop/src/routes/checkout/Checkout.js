import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { cartContext } from "../../contexts/cart-context-provider";
import "./checkout.styles.scss";

const headerItems = ["Product", "Description", "Quantity", "Price", "Remove"];
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(cartContext);
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
