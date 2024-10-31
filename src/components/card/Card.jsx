import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { FaVideo } from "react-icons/fa";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} c />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <div
          // className={styles.desc}
          className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 hover:underline"
          dangerouslySetInnerHTML={{ __html: item?.desc }}
        /> */}
        <Link href={`/posts/${item.slug}`} passHref className={styles.link}>
          Read More
        </Link>
        {item.videoLink && (
          <Link href={item.videoLink} passHref>
            <div className="bg-violet-600 text-white font-semibold text-center p-2 gap-5 items-center flex-row justify-center flex">
              <FaVideo />
              <span>Video</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
