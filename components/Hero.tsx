import Box from "@mui/material/Box";
import React from "react";
import { COLORS } from "../styles/colors";
import Nav from "./Nav";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CustomButton from "./Button";
const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.darkPurple,
        color: COLORS.white,
        height: "80vh",
        border: "solid 1px #FFF",
        borderColor: "transparent transparent #FFF transparent",
        borderRadius: "60%/75px 75px 0 0",
        transform: "rotateX(180deg)",
        overflow: "hidden",
        position: "relative",
        zIndex: 100,
      }}
    >
      <Container
        sx={{
          transform: "rotateX(180deg) translateY(-40vh)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Nav />
        <Typography
          variant="h1"
          sx={{
            fontFamily: "serif",
            maxWidth: "30rem",
            textAlign: "center",
            margin: "2rem 0",
          }}
        >
          Data <span className="neonUnderline">tailored</span> to your needs.
        </Typography>
        <CustomButton text="Learn More" />
        {/* <Image 
        src=""
        alt= "decorative"
        height={400}
        width={650}
        style={{position: "absolute", left: -375, top: 100}} 
         */}

        {/* <Image 
        src=""
        alt= "decorative2"
        height={200}
        width={500}
        style={{position: "absolute", right: -300, top: 300}} 
         */}
      </Container>
    </Box>
  );
};

export default Hero;
