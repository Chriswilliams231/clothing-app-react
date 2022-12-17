import React from "react";

import { CustomButtonContainer } from "./button.styles.jsx";

// export const BUTTON_TYPE_CLASSES = {
//   base: "base",
//   google: "google-sign-in",
//   inverted: "inverted",
// };

// const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
//   ({
//     [BUTTON_TYPE_CLASSES.base]: BaseButton,
//     [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
//     [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
//   }[buttonType]);

const CustomButton = ({ children, isLoading, ...props }) => {
  return(
  <CustomButtonContainer disabled={isLoading} {...props}>
    {children}
  </CustomButtonContainer>
  );
};

export default CustomButton;
