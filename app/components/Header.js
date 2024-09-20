import React from "react";
import { Stack, Typography } from "@mui/material";

const Header = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      component="nav"
      sx={{
        p: 4,
        boxSizing: "border-box",
        width: "100%",  
      }}
    >
      <Typography variant="h6" color="white">
        Starclinch
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        sx={{
          ml: "auto",
          width: { xs: "100%", md: "40%" }, 
          justifyContent: "space-around",
        }}
      >
        {["Book Celebrities", "Join Community"].map((text, index) => (
          <Typography key={index} variant="body1" color="white">
            {text}
          </Typography>
        ))}
        <Typography
          variant="body1"
          sx={{
            background: "linear-gradient(to right, #C88876, #C44D35, #CC2865, #93204D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Post your requirements
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Header;
