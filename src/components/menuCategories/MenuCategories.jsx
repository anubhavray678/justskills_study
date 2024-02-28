import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/read?cat=android"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Android
      </Link>
      <Link
        href="/read?cat=emerging-tech"
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        Emerging-tech
      </Link>
      <Link
        href="/read?cat=coding"
        className={`${styles.categoryItem} ${styles.food}`}
      >
        coding
      </Link>
      <Link
        href="/read?cat=travel"
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        Travel
      </Link>
      <Link
        href="/read?cat=culture"
        className={`${styles.categoryItem} ${styles.culture}`}
      >
        Culture
      </Link>
      <Link
        href="/read?cat=placement"
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        placement
      </Link>
    </div>
  );
};

export default MenuCategories;
