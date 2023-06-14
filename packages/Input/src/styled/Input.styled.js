import styled from "styled-components";

const StyledInput = styled.input`
  ${({ theme }) => theme.body};
  padding: ${({ theme }) => theme.spacing02};
  border: ${({ theme, isDisabled }) =>
    `1px solid ${isDisabled ? theme.border01Disabled : theme.border01}`};
  border-radius: ${({ theme }) => theme.borderRadius01};
  background-color: ${({ theme, isDisabled }) => {
    if (isDisabled) return theme.surface01Disabled;

    return theme.surface01;
  }};
  color: ${({ theme, isDisabled }) =>
    isDisabled ? theme.textColor01Disabled : theme.textColor01};

  ${({ isDisabled, theme }) => {
    if (isDisabled) return;

    return `
      &:focus {
        border: 0px;
        outline: 3px solid ${theme.active01};
        background-color: ${theme.surface01Active};
      }
    `;
  }}

  &::placeholder {
    color: ${({ theme }) => theme.textColor01Disabled};
  }
`;

export { StyledInput };
