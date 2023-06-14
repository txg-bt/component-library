import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Modal, { Styled } from "../src";
import Button from "../../Button/src";
import themes from "../../Theme/dist";
import { Flex } from "rebass";

export default {
  component: Modal,
  title: "Modal"
};

export const modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkOpen, setIsDarkOpen] = useState(false);

  return (
    <Flex>
      <ThemeProvider theme={themes.client.light}>
        <Modal
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
          title={"Some title"}
        >
          <Styled.Content>asdfa</Styled.Content>
          <Styled.Footer>
            <Button type="secondary">Cancel</Button>
            <Button style={{ marginLeft: "16px" }}>Save</Button>
          </Styled.Footer>
        </Modal>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      </ThemeProvider>

      <ThemeProvider theme={themes.client.dark}>
        <Modal
          onClose={() => setIsDarkOpen(false)}
          isOpen={isDarkOpen}
          title={"Some title"}
        >
          <Styled.Content>asdfa</Styled.Content>
          <Styled.Footer>
            <Button type="secondary">Cancel</Button>
            <Button style={{ marginLeft: "16px" }}>Save</Button>
          </Styled.Footer>
        </Modal>
        <Button onClick={() => setIsDarkOpen(true)}>Open Dark Modal</Button>
      </ThemeProvider>
    </Flex>
  );
};
