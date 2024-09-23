"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Stack, Typography, IconButton, Box } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/assets/nora.jpg",  
    "/assets/image8.jpeg",
    "/assets/image7.jpg",
  ];

  const texts = [
    "Nora Fatehi for an event hosted by XYZ performed at Pune.",
    "Zakir Khan for an event hosted at Pune for Meesho.",
    "Kapil Sharma for an event hosted by XYZ performed at Bangalore.",
  ];

  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
        my: 24,
        py: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top rotating banner */}
      <Box
        sx={{
            position: "absolute",
            top: "40%",
            left: "-35%",
            width: "70%",
            height: "50px",
            bgcolor: "#212127",
            transform: "rotate(-45deg)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&::before": {
              content: '"HEADLINES OF TODAY ⭐ HEADLINES OF TODAY ⭐ HEADLINES OF TODAY ⭐ HEADLINES OF TODAY"',
              color: "#fff",
              fontSize: 24,
              position: "absolute",
              whiteSpace: "nowrap",
              animation: "marquee 5s linear infinite alternate",
            },
          }}
      />

      {/* Bottom rotating banner */}:
      <Box
        sx={{
            position: "absolute",
            top: "40%",
            right: "-35%",
            width: "70%",
            height: "50px",
            bgcolor: "#212127",
            transform: "rotate(-45deg)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&::before": {
              content: '"HEADLINES OF TODAY ⭐ HEADLINES OF TODAY ⭐ HEADLINES OF TODAY ⭐ HEADLINES OF TODAY"',
              color: "#fff",
              fontSize: 24,
              position: "absolute",
              whiteSpace: "nowrap",
              animation: "marquee 5s linear infinite alternate",
            },
          }}
      />

      <style>{marqueeAnimation}</style>

      {/* Carousel header */}
      <Typography
        variant="h4"
        fontSize={{ xs: 30, md: 45 }} 
        color="#fff"
        sx={{ textAlign: "center" }}
      >
        Recent Shows made star-
        <br />
        studded via StarClinch
      </Typography>

      {/* Carousel content */}
      <Stack
        direction="row"
        sx={{
          my: 8,
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          width: "100%",
        }}
      >
        {/* Left arrow button */}
        <IconButton
          onClick={handleLeftClick}
          sx={arrowButtonStyle}
        >
          <ArrowLeft htmlColor="#fff" />
        </IconButton>

        {/* Carousel image and text */}
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            width: { xs: "100%", md: "60%" }, 
            justifyContent: "space-between",
          }}
        >
          {/* Image box */}
          <Box
            sx={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: "cover",
              borderTopLeftRadius: "45%",
              borderTopRightRadius: "45%",
              height: { xs: 300, md: 400 }, 
              marginLeft: "10%",
              width: "50%",
            }}
          />
          {/* Text box */}
          <Stack
            sx={{
              width: "30%",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography variant="h4" fontSize={36} sx={{ letterSpacing: 1.1 }}>
              {texts[currentImageIndex]}
            </Typography>
            <br />
            <Typography>
              <CalendarMonthIcon sx={{ marginTop: "10px" }} htmlColor="#fff" />
              <u style={{ textDecoration: "none", fontSize: "20px" }}>14th March 2023</u>
            </Typography>
          </Stack>
        </Stack>

        {/* Right arrow button */}
        <IconButton
          onClick={handleRightClick}
          sx={arrowButtonStyle}
        >
          <ArrowRight htmlColor="#fff" />
        </IconButton>
      </Stack>
    </Stack>
  );
}


// Animation keyframes
const marqueeAnimation = `
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(100%); }
  }
`;

// Style for arrow buttons
const arrowButtonStyle = {
  bgcolor: "#212127",
  boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.5)",
};
