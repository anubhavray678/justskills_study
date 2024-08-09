import React from "react";
import Image from "next/image";
import styles from "./FeaturedCard.module.css";
import Link from "next/link";

const FeaturedCard = ({ item }) => {
  return (
    <div className={styles.container}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <Link href={`/posts/${item.slug}`}>
          <div
            className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 hover:underline"
            dangerouslySetInnerHTML={{ __html: item?.desc }}
          />
        </Link>
        <Link href={`/posts/${item.slug}`} passHref className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
