import styled from "styled-components";
import { BUTTON_TYPE } from "../constants";

function computeHoverColor({ theme, type }) {
  if (type === BUTTON_TYPE.secondary) {
    return theme.surface01Hover;
  }

  if (type === BUTTON_TYPE.destructive) {
    return theme.errorColorHover;
  }

  return theme.mainColorHover;
}

function computeBackgroundColor({ theme, type, isActive, isDisabled }) {
  if (type === BUTTON_TYPE.secondary) {
    if (isDisabled) {
      return theme.surface01Disabled;
    }

    return isActive ? theme.surface01Active : theme.surface01;
  }

  if (type === BUTTON_TYPE.destructive) {
    if (isDisabled) {
      return theme.errorColorDisabled;
    }

    return isActive ? theme.errorColorActive : theme.errorColor;
  }

  if (isDisabled) {
    return theme.mainColorDisabled;
  }

  return isActive ? theme.mainColorActive : theme.mainColor;
}

function computeTextColor({ theme, type }) {
  if (type === BUTTON_TYPE.secondary) {
    return theme.textColor01;
  }

  return theme.textColor05;
}

// ${({ theme, type }) => computeColor(theme, type)};

const StyledButton = styled.button`
  ${({ theme }) => theme.body};
  padding: ${({ theme }) => `${theme.spacing03} ${theme.spacing05}`};
  background-color: ${computeBackgroundColor};
  color: ${computeTextColor};
  border: ${({ theme, type, isDisabled }) =>
    type === BUTTON_TYPE.secondary
      ? `1px solid ${isDisabled ? theme.border01Disabled : theme.border01}`
      : "0px"};
  border-radius: ${({ theme }) => theme.borderRadius01};

  &:hover {
    ${({ theme, isDisabled, type }) => ({
      cursor: isDisabled ? "auto" : "pointer",
      ...(!isDisabled && {
        backgroundColor: computeHoverColor({ theme, type })
      })
    })}
  }
`;

export { StyledButton };
