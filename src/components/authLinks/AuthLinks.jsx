"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();
  const { data } = useSession();
  if (data && data.user) {
    return (
      <>
        <Link href={"/profile"}>
          <Image
            src={data.user.image}
            alt={data.user.name}
            className={styles.profile}
            width={32}
            height={32}
          />
        </Link>
        {/* <span className={styles.link} onClick={signOut}>
          <button className={styles.link}>Logout</button>
        </span> */}

        <div className={styles.burger} onClick={() => setOpen(!open)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        {open && (
          <div className={styles.responsiveMenu}>
            <Link href="https://justskills.in/about">About</Link>
            <Link href="/read">Read</Link>
            <Link href="/category">Category</Link>
            <Link href="https://justskills.in/contact">Contact</Link>
            {status === "unauthenticated" ? (
              <Link href="/login" className={styles.link}>
                Login
              </Link>
            ) : (
              <>
                <Link href="/write">Write</Link>
                <span onClick={signOut}>
                  <button className={styles.link}>Logout</button>
                </span>
              </>
            )}
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <Link href="/login" className={styles.links}>
          Login
        </Link>
        <button></button>

        <div className={styles.burger} onClick={() => setOpen(!open)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        {open && (
          <div className={styles.responsiveMenu}>
            <Link href="https://justskills.in/about">About</Link>
            <Link href="/read">Read</Link>
            <Link href="/category">Category</Link>
            <Link href="https://justskills.in/contact">Contact</Link>
            {status === "unauthenticated" ? (
              <Link href="/login" className={styles.link}>
                Login
              </Link>
            ) : (
              <>
                <Link href="/write">Write</Link>
                <span onClick={signOut}>
                  <button className={styles.link}>Logout</button>
                </span>
              </>
            )}
          </div>
        )}
      </>
    );
  }
};

export default AuthLinks;
