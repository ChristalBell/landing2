import Hero from "@/components/Hero";
import Value from "@/components/Value";
import Box from "@mui/material/Box";

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
      <Value />
    </Box>
  );
};

export default Home;
