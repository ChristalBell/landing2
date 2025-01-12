import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { COLORS } from "@/styles/colors";

const Nav = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
    >
      <Typography>light logo.svg </Typography>
      <Typography className="neonUnderline">apply for access</Typography>
    </Box>
  );
};

export default Nav;
