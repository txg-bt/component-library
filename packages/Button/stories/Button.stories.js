import React from "react";
import { ThemeProvider } from "styled-components";

import Button from "../src";
import themes from "../../Theme/dist";
import { Flex } from "rebass";
import { BUTTON_TYPE } from "../src/constants";

export default {
  component: Button,
  title: "Button"
};

export const button = () => {
  return (
    <Flex flexDirection={"column"} alignItems="center">
      <h1>Client Light</h1>
      <Flex justifyContent="center" flexDirection={"row"}>
        <ThemeProvider theme={themes.client.light}>
          <Flex justifyContent="center" flexDirection={"column"}>
            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Light Primary button
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => console.log("here")}>Text</Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Light Secondary button
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.secondary}
                >
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Light Destructive button
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.destructive}
                >
                  Text
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex justifyContent="center" flexDirection={"column"}>
            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Light Primary button Disabled
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => console.log("here")} isDisabled>
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Light Secondary button Disabled
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.secondary}
                  isDisabled
                >
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Light Destructive button Disabled
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.destructive}
                  isDisabled
                >
                  Text
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Flex justifyContent="center" flexDirection={"column"}>
            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Light Primary button Active
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => console.log("here")} isActive>
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Light Secondary button Active
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.secondary}
                  isActive
                >
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Light Destructive button Active
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.destructive}
                  isActive
                >
                  Text
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </ThemeProvider>
      </Flex>

      <h1>Client Dark</h1>
      <Flex justifyContent="center">
        <ThemeProvider theme={themes.client.dark}>
          <Flex justifyContent="center" flexDirection={"column"}>
            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Dark Primary button
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => console.log("here")}>Text</Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Dark Secondary button
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.secondary}
                >
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Dark Destructive button
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.destructive}
                >
                  Text
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex justifyContent="center" flexDirection={"column"}>
            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Dark Primary button Disabled
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => console.log("here")} isDisabled>
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Dark Secondary button Disabled
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.secondary}
                  isDisabled
                >
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Dark Destructive button Disabled
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.destructive}
                  isDisabled
                >
                  Text
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Flex justifyContent="center" flexDirection={"column"}>
            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Dark Primary button Active
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => console.log("here")} isActive>
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Dark Secondary button Active
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.secondary}
                  isActive
                >
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Client Dark Destructive button Active
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.destructive}
                  isActive
                >
                  Text
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </ThemeProvider>
      </Flex>

      <h1>Vendor Light</h1>
      <Flex justifyContent="center" flexDirection={"row"}>
        <ThemeProvider theme={themes.vendor.light}>
          <Flex justifyContent="center" flexDirection={"column"}>
            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Light Primary button
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => console.log("here")}>Text</Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Light Secondary button
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.secondary}
                >
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Light Destructive button
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.destructive}
                >
                  Text
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex justifyContent="center" flexDirection={"column"}>
            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Light Primary button Disabled
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => console.log("here")} isDisabled>
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Light Secondary button Disabled
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.secondary}
                  isDisabled
                >
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Light Destructive button Disabled
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.destructive}
                  isDisabled
                >
                  Text
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Flex justifyContent="center" flexDirection={"column"}>
            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Light Primary button Active
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => console.log("here")} isActive>
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Light Secondary button Active
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.secondary}
                  isActive
                >
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Light Destructive button Active
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.destructive}
                  isActive
                >
                  Text
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </ThemeProvider>
      </Flex>

      <h1>Vendor Dark</h1>
      <Flex justifyContent="center">
        <ThemeProvider theme={themes.vendor.dark}>
          <Flex justifyContent="center" flexDirection={"column"}>
            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Dark Primary button
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => console.log("here")}>Text</Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Dark Secondary button
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.secondary}
                >
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Dark Destructive button
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.destructive}
                >
                  Text
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex justifyContent="center" flexDirection={"column"}>
            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Dark Primary button Disabled
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => console.log("here")} isDisabled>
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Dark Secondary button Disabled
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.secondary}
                  isDisabled
                >
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Dark Destructive button Disabled
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.destructive}
                  isDisabled
                >
                  Text
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Flex justifyContent="center" flexDirection={"column"}>
            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Dark Primary button Active
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => console.log("here")} isActive>
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Dark Secondary button Active
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.secondary}
                  isActive
                >
                  Text
                </Button>
              </Flex>
            </Flex>

            <Flex justifyContent="center" flexDirection={"column"} mb="16px">
              <Flex justifyContent="center" pb="8px">
                Vendor Dark Destructive button Active
              </Flex>
              <Flex justifyContent="center">
                <Button
                  onClick={() => console.log("here")}
                  type={BUTTON_TYPE.destructive}
                  isActive
                >
                  Text
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </ThemeProvider>
      </Flex>
    </Flex>
  );
};
