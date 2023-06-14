import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Input from "../src";
import themes from "../../Theme";
import { Flex } from "rebass";

export default {
  component: Input,
  title: "Input"
};

export const input = () => {
  const [value, setValue] = useState("");

  return (
    <Flex flexDirection={"column"}>
      <Flex>
        <h3>Light</h3>
      </Flex>
      <ThemeProvider theme={themes.client.light}>
        <Input type="text" onChange={setValue} value={value}></Input>
      </ThemeProvider>

      <Flex>
        <h3>Light Disabled</h3>
      </Flex>
      <ThemeProvider theme={themes.client.light}>
        <Input type="text" onChange={setValue} value={value} isDisabled></Input>
      </ThemeProvider>

      <Flex>
        <h3>Dark</h3>
      </Flex>
      <ThemeProvider theme={themes.client.dark}>
        <Input type="text" onChange={setValue} value={value}></Input>
      </ThemeProvider>

      <Flex>
        <h3>Dark Disabled</h3>
      </Flex>
      <ThemeProvider theme={themes.client.dark}>
        <Input type="text" onChange={setValue} value={value} isDisabled></Input>
      </ThemeProvider>
    </Flex>
  );
};
