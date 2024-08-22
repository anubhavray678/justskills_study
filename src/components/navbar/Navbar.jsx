import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import logo from "@/assets/logo.png";
import ScrollSlider from "../slider/ScrollSlider";

const Navbar = () => {
  return (
    <div className=" fixed top-0 z-[9999] w-full left-0 pr-5 pl-5">
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="" className="Applogo" />
          <Link href={"/"}>
            <div>
              Just<span style={{ color: " rgb(234 179 8)" }}>Skills</span>
            </div>
          </Link>
        </div>

        <div className={styles.links}>
          <ThemeToggle />

          <Link href="/read" className={styles.link}>
            Read
          </Link>
          <Link href="https://justskills.in/contact" className={styles.link}>
            Contact
          </Link>
          <Link href="https://justskills.in/about" className={styles.link}>
            About
          </Link>
          <AuthLinks />
        </div>
      </div>
      <ScrollSlider />
    </div>
  );
};

export default Navbar;
