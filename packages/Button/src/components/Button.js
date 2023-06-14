import React from "react";
import PropTypes from "prop-types";

import { BUTTON_TYPE } from "../constants";
import { StyledButton } from "../styled/Button.styled";

function Button({ onClick, children, type, isActive, isDisabled, ...others }) {
  return (
    <StyledButton
      {...(!isDisabled && { onClick: onClick })}
      type={type}
      isActive={isActive}
      isDisabled={isDisabled}
      {...others}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool
};

Button.defaultProps = {
  type: BUTTON_TYPE.primary,
  isActive: false,
  isDisabled: false
};

export default Button;
