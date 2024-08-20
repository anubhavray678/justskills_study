import React from "react";
import Image from "next/image";
import styles from "./FeaturedCard.module.css";
import Link from "next/link";

const FeaturedCard = ({ item }) => {
  const month = item.createdAt.substring(5, 7);
  const date = item.createdAt.substring(8, 10);
  let sendMonth = "";
  if (month == 1) {
    sendMonth = "Jan";
  }
  if (month == 2) {
    sendMonth = "Feb";
  }
  if (month == 3) {
    sendMonth = "Mar";
  }
  if (month == 4) {
    sendMonth = "Apr";
  }
  if (month == 5) {
    sendMonth = "May";
  }
  if (month == 6) {
    sendMonth = "Jun";
  }
  if (month == 7) {
    sendMonth = "Jul";
  }
  if (month == 8) {
    sendMonth = "Aug";
  }
  if (month == 9) {
    sendMonth = "Sep";
  }
  if (month == 10) {
    sendMonth = "Oct";
  }
  if (month == 11) {
    sendMonth = "Nov";
  }
  if (month == 12) {
    sendMonth = "Dec";
  }

  return (
    <div className={styles.container}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className="flex justify-between">
          <Link href={`https://study.justskills.in/read?cat=${item.catSlug}`}>
            <span className={styles.category}>{item.catSlug}</span>
          </Link>
          <span className={styles.categor}>{date + "-" + sendMonth}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div className="hidden md:flex">
          <Link href={`/posts/${item.slug}`}>
            <div
              className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 hover:underline"
              dangerouslySetInnerHTML={{ __html: item?.desc }}
            />
          </Link>
        </div>
        <Link href={`/posts/${item.slug}`} passHref className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
