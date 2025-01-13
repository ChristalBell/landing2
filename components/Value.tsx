import Box from "@mui/material/Box";
import React from "react";
import Card from "./Card";
import { COLORS } from "@/styles/colors";
import Container from "@mui/material/Container";

const cardDetail = [
  {
    number: 1,
    title: "Actionable Insights",
    description:
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
  },
  {
    number: 2,
    title: "Data-Driven Decisions",
    description:
      "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
  },
  {
    number: 3,
    title: "Always Affordable",
    description:
      "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
  },
];
const Value = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: COLORS.extraLightPurple,
        height: "80vh",
        border: "solid 1px #FFF",
        borderColor: "transparent transparent #FFF transparent",
        borderRadius: "60%/75px 75px 0 0",
        transform: "rotateX(180deg) ",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <Container
        sx={{
          transform: "rotateX(180deg)",
          display: "flex",

          alignItems: "center",
        }}
      >
        {cardDetail.map((card) => {
          return (
            <Card
              number={card.number}
              title={card.title}
              description={card.description}
              key={card.number}
            />
          );
        })}
      </Container>
    </Box>
  );
};

export default Value;
