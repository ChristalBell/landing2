import Box from "@mui/material/Box";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { COLORS } from "@/styles/colors";
import CustomButton from "./Button";

const CTA = () => {
  return (
    <Box>
      <Container sx={{ display: "flex" }}>
        <p> alt=profile image </p>
        <Box
          sx={{
            backgroundColor: COLORS.darkPurple,
            right: 175,
            padding: "4rem",
            width: "37.625rem",
            top: -300,
          }}
        >
          <Typography
            sx={{ color: COLORS.white, fontSize: "4rem", fontFamily: "serif" }}
          >
            Be the first to test
          </Typography>
          <Typography
            sx={{
              color: COLORS.white,
              lineHeight: "1.75rem",
              margin: "1rem 0 2rem",
            }}
          >
            Hi, I am Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I will be in touch to schedule a
            call.
          </Typography>
          <CustomButton text="Apply for access " />
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
