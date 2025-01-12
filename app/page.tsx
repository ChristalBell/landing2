import Hero from "@/components/Hero";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <Box
    // sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Hero />
      {/* <Image 
        src=""
        alt= "hero image"
        height={300}
        width={600}
        style={{position: "absolute",  top: 400, zIndex: 5}} 
         */}
    </Box>
  );
};

export default Home;
