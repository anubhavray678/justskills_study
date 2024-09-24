// import React from "react";
// import styles from "./navbar.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import AuthLinks from "../authLinks/AuthLinks";
// import ThemeToggle from "../themeToggle/ThemeToggle";
// import logo from "@/assets/logo.png";
// import ScrollSlider from "../slider/ScrollSlider";

// const Navbar = () => {
//   return (
//     <div className=" fixed top-0 z-[9999] w-full left-0 pr-5 pl-2">
//       <div className={styles.container}>
//         <div className={styles.logo}>
//           <Image src={logo} alt="" className="Applogo" />
//           <Link href={"/"}>
//             <div>
//               Just<span style={{ color: " rgb(234 179 8)" }}>Skills</span>
//             </div>
//           </Link>
//         </div>

//         <div className={styles.links}>
//           <ThemeToggle />

//           <Link href="/read" className={styles.link}>
//             Read
//           </Link>
//           <Link href="/category" className={styles.link}>
//             Category
//           </Link>
//           <Link href="/contact" className={styles.link}>
//             Contact
//           </Link>
//           <Link href="/about" className={styles.link}>
//             About
//           </Link>
//           <AuthLinks />
//         </div>
//       </div>
//       <ScrollSlider />
//     </div>
//   );
// };

// export default Navbar;

"use client";

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import logo from "@/assets/logo.png";
import ScrollSlider from "../slider/ScrollSlider";

const Navbar = () => {
  const [visible, setVisible] = useState(true); // To control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY && scrollY > 50) {
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

  return (
    <div
      className={`fixed top-0 z-[9999] w-full left-0 pr-5 pl-2 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="App logo" className="Applogo" />
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
          <Link href="/category" className={styles.link}>
            Category
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
          <Link href="/about" className={styles.link}>
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
