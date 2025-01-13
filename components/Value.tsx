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
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics. ",
  },
  {
    number: 2,
    title: "Actionable Insights",
    description:
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics. ",
  },
  {
    number: 3,
    title: "Actionable Insights",
    description:
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics. ",
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
        transform: "rotateX(180deg) translateY(10vh)",
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
