import { COLORS } from "@/styles/colors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

interface Props {
  number: number;
  title: string;
  description: string;
}

const Card = ({ number, title, description }: Props) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        sx={{
          border: `1px solid ${COLORS.darkPurple}`,
          borderRadius: "50%",
          height: "2rem",
          width: "2rem",
          color: COLORS.darkPurple,
          fontFamily: "serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "3.5rem",
        }}
      >
        {number}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: COLORS.darkPurple,
          fontFamily: "serif",
          fontSize: "38px",
          fontWeight: 600,
          marginBottom: "1.75rem",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: COLORS.darkPurple,
          textAlign: "center",
          lineHeight: "1.75rem",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Card;
