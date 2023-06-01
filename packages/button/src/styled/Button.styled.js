import styled from "styled-components";
import { BUTTON_TYPE } from "../constants";

function computeColor({ theme, type }) {
  if (type === BUTTON_TYPE.secondary) {
    return {
      color: theme.textColor02,
      backgroundColor: theme.surface03,
      onHover: theme.surfaceHover03,
    };
  }

  if (type === BUTTON_TYPE.destructive) {
    return {
      color: theme.textColor02,
      backgroundColor: theme.surface03,
      onHover: theme.surfaceHover03,
    };
  }

  return {
    color: theme.textColor02,
    backgroundColor: theme.surface03,
    onHover: theme.surfaceHover03,
  };
}

const StyledButton = styled.button`
  ${({ theme, type }) => computeColor(theme, type)};
`;

export { StyledButton };
