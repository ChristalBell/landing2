import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React from "react";
import { COLORS } from "@/styles/colors";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: " column",
        alignItems: "center",
        backgroundColor: COLORS.darkPurple,
        width: "100vw",
        color: COLORS.white,
        padding: "0",
        fontFamily: "serif",
        marginTop: "2.75rem",
      }}
    >
      <p>alt=dark logo</p>
      <p>Follow Us</p>
    </Box>
  );
};

export default Footer;
