"use client";

import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

export default function MosaicGrid() {
  const [isActive, setIsActive] = useState("photos");

  const photoImages = [
    "/assets/image1.png",
    "/assets/image2.png",
    "/assets/image1.png",
    "/assets/image2.png",
    "/assets/image3.png",
    "/assets/image4.png",
    "/assets/image3.png",
    "/assets/image4.png",
  ];

  const handleTabChange = (tab) => {
    setIsActive(tab);
  };

  return (
    <Stack sx={{ overflow: "hidden" }}>
      <Stack sx={outerContainerStyle}>
        <Stack direction="row" alignItems="center" sx={tabContainerStyle}>
          <Tab
            label="Photos"
            isActive={isActive === "photos"}
            onClick={() => handleTabChange("photos")}
          />
          <Tab
            label="Videos"
            isActive={isActive === "videos"}
            onClick={() => handleTabChange("videos")}
          />
        </Stack>

        <Stack
          direction="row"
          width={{ xs: "90vw", md: "62vw" }} // Responsive width
          alignItems="center"
          justifyContent="center"
          gap={3}
          sx={{ mt: 10, flexWrap: "wrap" }}
        >
          {isActive === "photos"
            ? photoImages.map((image, i) => (
                <Card
                  key={i}
                  circle={i === 0 || i === 2}
                  square={i === 5 || i === 7}
                  image={image}
                />
              ))
            : Array.from({ length: 3 }, (_, i) => <VideoCard key={i} />)}
        </Stack>
      </Stack>
    </Stack>
  );
}

// Reusable Tab component for better code maintainability
const Tab = ({ label, isActive, onClick }) => (
  <Typography
    variant="body1"
    onClick={onClick}
    sx={{
      bgcolor: isActive ? "#fff" : "#23232D",
      color: isActive ? "#23232D" : "#fff",
      p: 2,
      borderRadius: "30px",
      width: 200,
      cursor: "pointer",
      margin: "10px",
      textAlign: "center",
      transition: "background-color 0.3s ease", // Smooth transition for tab switch
    }}
  >
    {label}
  </Typography>
);

// Card component
const Card = ({ circle, square, image }) => (
  <Box
    sx={{
      ...cardStyle,
      borderRadius: circle ? "86% 89% 2% 79%" : square ? "0%" : "12px",
      backgroundImage: `url(${image})`,
      width: { xs: "45%", md: "23%" }, // Responsive width
    }}
  />
);

// VideoCard component
const VideoCard = () => (
  <Box
    sx={{
      ...cardStyle,
      borderRadius: "12px",
      backgroundImage: `url(/assets/image2.png?sig=${Math.random() * 100})`,
      width: { xs: "80%", md: "31%" }, // Responsive width
      height: 400,
    }}
  />
);

// Common card style for consistency
const cardStyle = {
  border: "1px #fff solid",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: 200,
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

// Style objects for maintainability
const outerContainerStyle = {
  background: "linear-gradient(to bottom, rgba(13, 13, 25, 0.82), rgba(13, 13, 25, 0))",
  border: "3px solid rgba(34, 33, 100, 0.5)",
  borderBottom: "none",
  height: "100vh",
  width: "100vw",
  borderRadius: "9000px 9000px 0 0",
  overflow: "hidden",
  zIndex: 2,
  alignItems: "center",
  boxShadow: "0px 56px 66px 11px rgba(0, 0, 0, 1) inset",
};

const tabContainerStyle = {
  borderRadius: "120px",
  background: "linear-gradient(to bottom, rgba(13, 13, 25, 0.82), rgba(13, 13, 25, 0))",
  p: 2,
  zIndex: 2,
  justifyContent: "center",
  textAlign: "center",
  width: 400,
  mt: 10,
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
};
