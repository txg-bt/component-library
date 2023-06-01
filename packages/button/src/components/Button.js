import React from "react";
import PropTypes from "prop-types";

import { BUTTON_TYPE } from "../constants";
import { StyledButton } from "../styled/Button.styled";

function Button({ onClick, text, type, isActive, isDisabled }) {
  return (
    <StyledButton
      {...(!isDisabled && { onClick: onClick })}
      type={type}
      isActive={isActive}
    >
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  type: BUTTON_TYPE.primary,
  isActive: false,
  isDisabled: false,
};

export default Button;
