import { Flex } from "rebass";
import styled from "styled-components";

const Content = styled(Flex)`
  height: 100%;
  color: ${({ theme }) => theme.textColor01};
`;

const Footer = styled(Flex)`
  position: sticky;
  bottom: 0;
  justify-content: flex-end;
`;

export { Content, Footer };
