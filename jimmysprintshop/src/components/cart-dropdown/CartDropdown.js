import Button from "../button/Button";
import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="empty-message"></div>
      <div className="cart-items"></div>
      <Button>Check Out</Button>
    </div>
  );
};

export default CartDropdown;
