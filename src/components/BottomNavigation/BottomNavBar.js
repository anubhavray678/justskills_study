"use client";

import React, { useState, useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";

import { BsPerson } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { TbClipboardText } from "react-icons/tb";
import { FaClipboard } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import WorkIcon from "@mui/icons-material/Work";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function BottomNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(getPageIndex(pathname));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  function getPageIndex(route) {
    switch (route) {
      case "/":
        return 0;
      case "/community":
        return 1;
      case "/bookings":
        return 2;
      case "/account":
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
        router.push("/community");
        break;
      case 2:
        router.push("/bookings");
        break;
      case 3:
        router.push("/account");
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
        // backgroundColor: "#FFEFEB",
        backgroundColor: "#fff",
        boxShadow: "0px -1px 10px 0 rgba(0, 0, 0, 20%)",
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
            <GoHome style={{ color: "#772eff" }} />
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
        label="Jobs"
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
        label="Account"
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
