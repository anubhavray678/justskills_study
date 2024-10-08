import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/read.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Navigating the World of Tomorrow, One Byte at a Time.
          </h1>
          <p className={styles.postDesc}>
            Delve into the vast universe of technology with a keen eye for
            detail and a passion for exploration.
            <br /> Here, we bring you in-depth analyses, comprehensive guides,
            and thought-provoking discussions on all things tech. We&apos;re
            your trusted companion on the journey through the ever-evolving
            landscape of innovation. Join us as we unravel the complexities,
            celebrate the advancements, and envision the future of technology,
            one big description at a time.
          </p>
          <Link href="/read">
            <button className={styles.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
