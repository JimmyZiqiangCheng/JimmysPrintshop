import {
  BaseButton,
  BlueButton,
  ButtonSpinner,
  WhiteButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base-button",
  blue: "blue-button",
  white: "white-button",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.blue]: BlueButton,
    [BUTTON_TYPE_CLASSES.white]: WhiteButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
