import React, { useState } from "react";
import PropTypes from "prop-types";

import { INPUT_TYPES } from "../constants";
import { StyledInput } from "../styled/Input.styled";

function Input({
  value,
  placeholder,
  onChange,
  type,
  isDisabled,
  hasIconRight,
  ...others
}) {
  return (
    <StyledInput
      {...(!isDisabled && { onChange: ({ target }) => onChange(target.value) })}
      type={type}
      isDisabled={isDisabled}
      placeholder={placeholder}
      disabled={isDisabled}
      {...others}
    />
  );
}

Input.propTypes = {
  value: PropTypes.any,
  placeholder: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  hasIconRight: PropTypes.bool
};

Input.defaultProps = {
  value: undefined,
  placeholder: "asfd",
  type: INPUT_TYPES.TEXT,
  isDisabled: false,
  hasIconRight: false
};

export default Input;
