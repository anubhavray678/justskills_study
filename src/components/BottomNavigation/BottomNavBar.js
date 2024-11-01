"use client";

import React, { useState, useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { GoHome, GoHomeFill } from "react-icons/go";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { IoChatbox, IoChatboxOutline } from "react-icons/io5";
import WorkIcon from "@mui/icons-material/Work";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function BottomNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(getPageIndex(pathname));
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(true); // State to control visibility
  const [lastScrollY, setLastScrollY] = useState(0);

  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark" ? true : false;

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  // Track scroll direction to hide/show the BottomNavBar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY && scrollY > 100) {
        // Scrolling up - hide navbar
        setVisible(false);
      } else {
        // Scrolling down - show navbar
        setVisible(true);
      }

      setLastScrollY(scrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  function getPageIndex(route) {
    switch (route) {
      case "/":
        return 0;
      case "/category":
        return 1;
      case "/jobmatch":
        return 2;
      case "/profile":
        return 3;
      default:
        return 0;
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/");
        break;
      case 1:
        router.push("/category");
        break;
      case 2:
        router.push("/jobmatch");
        break;
      case 3:
        router.push("/profile");
        break;
      default:
        break;
    }
  };

  if (!isMobile) {
    return null; // Render nothing on desktop
  }

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: "0px",
        left: 0,
        zIndex: 999,
        backgroundColor: isDarkMode ? "#0f172a" : "#fff",
        boxShadow: "0px -1px 10px 0 rgba(0, 0, 0, 20%)",
        transform: visible ? "translateY(0)" : "translateY(100%)", // Slide down when hidden
        transition: "transform 0.3s ease-in-out", // Smooth transition
        "& .MuiBottomNavigationAction-root": {
          fontSize: "1.7rem",
        },
      }}
      value={value}
      elevation={500}
      onChange={handleChange}
      showLabels
    >
      <BottomNavigationAction
        label="Home"
        value={0}
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: value === 0 ? "#adaaf2" : "gray",
            fontWeight: value === 0 ? "bold" : "normal",
            fontFamily: "sans-serif",
          },
        }}
        icon={
          value === 0 ? (
            <GoHomeFill style={{ color: "#adaaf2" }} />
          ) : (
            <GoHome style={{ color: "#adaaf2" }} />
          )
        }
      />
      <BottomNavigationAction
        label="Explore"
        value={1}
        icon={
          value === 1 ? (
            <IoChatbox style={{ color: "#adaaf2" }} />
          ) : (
            <IoChatboxOutline style={{ color: "#adaaf2" }} />
          )
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: value === 1 ? "#adaaf2" : "gray",
            fontWeight: value === 1 ? "bold" : "normal",
          },
        }}
      />
      <BottomNavigationAction
        label="JobMatch"
        value={2}
        icon={
          value === 2 ? (
            <WorkIcon style={{ color: "#adaaf2" }} />
          ) : (
            <WorkOutlineIcon style={{ color: "#adaaf2" }} />
          )
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: value === 2 ? "#adaaf2" : "gray",
            fontWeight: value === 2 ? "bold" : "normal",
            fontFamily: "sans-serif",
          },
        }}
      />

      <BottomNavigationAction
        label="Profile"
        value={3}
        icon={
          value === 3 ? (
            <BsPersonFill style={{ color: "#adaaf2" }} />
          ) : (
            <BsPerson style={{ color: "#adaaf2" }} />
          )
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: value === 3 ? "#adaaf2" : "gray",
            fontWeight: value === 3 ? "bold" : "normal",
            fontFamily: "serif",
          },
        }}
      />
    </BottomNavigation>
  );
}

export default BottomNavBar;
