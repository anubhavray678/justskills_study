import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="" className="Applogo" />
        <div>
          Just<span style={{ color: " rgb(234 179 8)" }}>Skills</span>
        </div>
      </div>

      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
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
  );
};

export default Navbar;
