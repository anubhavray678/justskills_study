import React from "react";
import styles from "./cardList.module.css";
import Image from "next/image";
import FeaturedCard from "../card/FeaturedCard";

const getData = async (page, cat) => {
  const res = await fetch(
    `https://justskills.in/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const FeaturedArticle = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  // Reverse the order of the posts
  const reversedPosts = posts.slice().reverse();

  // Get only the first post
  const firstPost = reversedPosts[0];

  return (
    <div className={`mt-5 sm:mt-32 ${styles.container}`}>
      <h1 className="font-bold font-sans text-xl pt-2 pb-2 text-indigo-500">
        Featured Post
      </h1>
      <div>
        {firstPost && <FeaturedCard item={firstPost} key={firstPost._id} />}
      </div>
    </div>
  );
};

export default FeaturedArticle;
