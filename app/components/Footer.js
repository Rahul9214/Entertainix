import { ArrowRightAltSharp } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Stack
      sx={{
        position: "relative",
        minHeight: "100vh",
        alignItems: "center",
        overflow: "hidden",
        px: 3, // Add padding for smaller screens
      }}
    >
      {/* Background Circles */}
      <Box
        sx={{
          background: "linear-gradient(to bottom, rgba(204, 83, 163, 0.99), rgba(213, 80, 80, 0))",
          width: { xs: 300, md: 500 }, // Responsive width
          height: { xs: 300, md: 500 }, // Responsive height
          borderRadius: "50%",
          position: "absolute",
          left: { xs: "-20%", md: "-10%" },
          top: { xs: "5%", md: "10%" },
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
      />
      <Box
        sx={{
          background: "radial-gradient(circle at center, rgba(204, 83, 163, 0.99), rgba(213, 80, 80, 0))",
          width: { xs: 400, md: 600 },
          height: { xs: 400, md: 600 },
          borderRadius: "50%",
          position: "absolute",
          right: { xs: "-30%", md: "-25%" },
          top: "0",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
      />

      {/* Main Content Box */}
      <Stack
        sx={{
          background: "linear-gradient(to bottom, rgba(20, 19, 30, 0.36), rgba(8, 8, 16, 0))",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          borderRadius: "300px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          height: { xs: "auto", md: 500 }, // Make height auto for smaller screens
          width: "80vw",
          textAlign: "center",
          p: 8,
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography variant="h3" color="#fff" sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
          20+ Talented Folks
        </Typography>

        <Stack sx={{ position: "relative", alignItems: "center" }}>
          {/* Dynamic Labels */}
          <Label
            text="Fun"
            sx={{
              top: "-60px",
              left: "2%",
              rotate: "-20deg",
            }}
          />
          <Label
            text="We're the team of"
            sx={{
              top: "-160px",
              left: "2%",
              rotate: "-20deg",
              color: "#ED7AA6",
              fontFamily: "fantasy",
            }}
          />
          <Label
            text="Inclusive"
            sx={{
              top: "-100px",
              right: "2%",
              rotate: "20deg",
            }}
          />

          <Typography variant="body2" color="#fff" sx={{ width: { xs: "80%", md: "50%" }, fontSize: 16 }}>
            From passion-driven dedication to impactful contribution, we do it all here. We are growing and would love to hear from you.
          </Typography>
        </Stack>

        <Button
          sx={{
            background: "linear-gradient(to right, #C88876, #C44D35, #CC2865, #93204D)",
            borderRadius: 8,
            textTransform: "capitalize",
            color: "#fff",
            px: 4,
            py: 2,
            fontSize: "1rem",
            mt: 2,
          }}
          endIcon={<ArrowRightAltSharp />}
        >
          Join Our Team
        </Button>

        {/* Hover Effect with Dynamic Labels */}
        <HoverEffect labels={["Focused", "Collaborative", "United", "Vibrant", "Dynamic", "Motivated"]} />
      </Stack>
    </Stack>
  );
}

function Label({ text, sx }) {
  return (
    <Stack
      sx={{
        background: "rgba(255, 255, 255, 0.01)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        borderRadius: "300px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        position: "absolute",
        px: 3,
        py: 1,
        ...sx,
      }}
    >
      <Typography variant="body1" component="span">
        {text}
      </Typography>
    </Stack>
  );
}

function HoverEffect({ labels }) {
  return (
    <Stack
      sx={{
        position: "relative",
        width: "100%",
        opacity: 0.5,
        transition: "transform 0.3s ease",
        "&:hover > div": {
          opacity: 1,
          transform: "translateY(-20px) scale(1.1)",
          transition: "transform 0.3s ease",
        },
      }}
    >
      {labels.map((label, index) => (
        <Label
          key={index}
          text={label}
          sx={{
            bottom: "-80px",
            left: `${20 * (index + 1)}%`,
            rotate: index % 2 === 0 ? "-20deg" : "20deg",
          }}
        />
      ))}
    </Stack>
  );
}
