import "./button.styles.scss";
import { BUTTON_TYPE_CLASSES } from "../../utils/enum/enum";

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
