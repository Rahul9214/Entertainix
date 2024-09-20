"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import MosaicGrid from "./components/MosaicGrid";
import DesignTeam from "./components/DesignTeam";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const [category, setCategory] = useState("Comedians");
  const [image, setImage] = useState("/assets/image4.png"); 
  const [animate, setAnimate] = useState(false);

  const categories = ["Comedians", "Dancer", "Singers"];
  const images = [
    "/assets/image4.png",
    "/assets/image10.jpg",
    "/assets/image9.png",
  ];

  const router = useRouter();

  // Handle category change animation
  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  }, [category]);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCategory((prevCategory) => {
        const newIndex = (categories.indexOf(prevCategory) + 1) % categories.length;
        setImage(images[newIndex]);
        return categories[newIndex];
      });
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}>
    <Stack>
      {/* <Header /> */}
      <Stack
        sx={{
          position: "relative",
          maxHeight: "100vh",
          height: "100vh",
          alignItems: "center",
          my: 10,
        }}
      >
        <Stack
          sx={{
            position: "relative",
            height: 800,
            width: "100vw",
            zIndex: 10,
          }}
        >
          <Stack
            sx={{
              height: 800,
              width: "100vw",
              left: "0",
              top: 0,
              position: "absolute",
              zIndex: 100,
            }}
          />
          <Box
            sx={{
              background:
                "radial-gradient(circle at center, rgba(61, 35, 33,0.3),rgba(61, 35, 33,1))",
              width: { xs: 300, sm: 500, md: 650 },
              height: { xs: 300, sm: 500, md: 650 },
              borderRadius: "50%",
              position: "absolute",
              left: "20%",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              border: "10px solid red", 
            }}
          >
            <Image
              src={image}
              alt={category}
              layout="intrinsic"
              width={650}
              height={650}
              style={{ borderRadius: "50%" }}
            />
            <Typography
              variant="h1"
              sx={{
                position: "absolute",
                color: "white",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#fff",
                transition: "transform 0.5s ease-in-out",
                ...(animate && {
                  transform: "rotate(-90deg) translateY(-100%)",
                  opacity: 0,
                }),
              }}
            >
              {category}
            </Typography>
          </Box>
          <Stack
            sx={{
              position: "absolute",
              right: "5%",
              top: "45%",
              width: "22%",
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              variant="h1"
              sx={{ mb: 4, textAlign: "left", fontSize: "50px" }}
            >
              <u style={{ color: "gray", textDecoration: "none" }}>
                Choose <br /> from
              </u>{" "}
              100+ categories
            </Typography>
            <Typography
              sx={{
                mb: 5,
                textAlign: "left",
                fontSize: "28px",
                background:
                  "linear-gradient(to right, #C88876, #C44D35, #CC2865, #93204D)",
                WebkitBackgroundClip: "text",
                cursor: "pointer", 
                WebkitTextFillColor: "transparent",
                display: "inline-block", 
              }}
              onClick={() => router.push("/categories")} // Redirect to categories page
            >
              Explore All Categories <ArrowRight color="#fff" htmlColor="#fff" />
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <MosaicGrid />

      {/* Dynamic Section with Hover Effects */}
      <Stack sx={{ mx: "10%", my: 12, gap: 12 }}>
        {[...Array(4)].map((_, index) => (
          <Stack
            direction="row"
            key={index}
            sx={{
              alignItems: "flex-end",
              gap: 8,
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
              marginBottom: "20px",
              "&:hover .image": {
                transform: "rotate(-10deg) scale(1.1)",
                filter: "brightness(4)",
              },
              "&:hover .text": {
                color: "#fff",
                opacity: 1,
              },
            }}
          >
            <Typography
              className="text"
              variant="h4"
              sx={{
                letterSpacing: 1.1,
                color: "rgba(255, 255, 255, 0.7)",
                opacity: 0.7,
                transition: "color 0.5s ease-in-out, opacity 0.5s ease-in-out",
              }}
            >
              Late Night Maggie <br /> Party for the boost
            </Typography>
            <Box
              className="image"
              sx={{
                backgroundImage: "url(/assets/image5.png)",
                height: 300,
                width: 300,
                borderRadius: 8,
                transform: "rotate(10deg)",
                transition: "transform 0.5s ease-in-out",
              }}
            />
          </Stack>
        ))}
      </Stack>

      <Carousel />

      {/* Meet the StarClinch Squads Section */}
      <Stack>
        <Typography
          className="text"
          variant="h4"
          sx={{
            letterSpacing: 1.1,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Meet Our StarClinch Squads
        </Typography>
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            backgroundImage: "url(/assets/photo2.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "10",
            marginBottom: "10%",
          }}
        />
      </Stack>

      {/* <DesignTeam /> */}
      <Footer />
    </Stack>
  </div>
  );
}
