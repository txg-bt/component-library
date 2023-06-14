import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal as MUIModal } from "@mui/material";
import { useTheme } from "styled-components";
import { Flex, Box } from "rebass";

function Modal({ title, isOpen, children, onClose, height, width }) {
  const theme = useTheme();

  return (
    <MUIModal
      open={isOpen}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Flex
        height={height}
        width={width}
        backgroundColor={theme.surface01}
        padding={theme.spacing05}
        color={theme.textColor01}
        flexDirection={"column"}
      >
        <Flex
          {...theme.heading}
          paddingBottom={theme.spacing04}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Box>{title}</Box>
          <Box
            onClick={onClose}
            style={{ userSelect: "none", cursor: "pointer" }}
          >
            X
          </Box>
        </Flex>
        {children}
      </Flex>
    </MUIModal>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node
};

Modal.defaultProps = {
  title: "",
  isOpen: false,
  height: 400,
  width: 600,
  children: null
};

export default Modal;
