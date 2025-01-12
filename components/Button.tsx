import React from "react";
import Button from "@mui/material/Button";
import { COLORS } from "@/styles/colors";

interface Props {
  text: string;
}
const CustomButton = ({ text }: Props) => {
  return (
    <Button
      sx={{
        backgroundColor: COLORS.green,
        borderRadius: "0",
        color: COLORS.darkPurple,
        textTransform: "none",
        padding: "0.75rem 2rem",
        fontWeight: "500",
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
