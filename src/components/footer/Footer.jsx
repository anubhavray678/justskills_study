import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.icons}>
          <div className={styles.logo}>
            <Image src={logo} alt="" className="Applogo" />
            <div>
              Just<span style={{ color: " rgb(234 179 8)" }}>Skills</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/read">Read</Link>
          <Link href="https://justskills.in/about">About</Link>
          <Link href="https://justskills.in/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Categories</span>
          <Link href="/read?cat=style">Android</Link>
          <Link href="/read?cat=fashion">Emerging Tech</Link>
          <Link href="/read?cat=coding">Coding</Link>
          <Link href="/read?cat=travel">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>

          <Link href="/">Email</Link>
          <Link href="https://t.me/JustForSkill">Telegram</Link>
          <Link href="https://www.youtube.com/@Justskills_">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
