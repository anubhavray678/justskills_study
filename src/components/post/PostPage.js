"use client";
import { useEffect, useState } from "react";
import styles from "@/app/posts/[slug]/singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import MenuCategories from "../menuCategories/MenuCategories";
import { FaShareAlt } from "react-icons/fa";
import Article from "../ads/inArticle";
import { CiBookmarkPlus } from "react-icons/ci";

import axios from "axios";
import YouTubePlayer from "@/components/video/YouTubePlayer";

const getData = async (slug) => {
  const res = await fetch(`https://justskills.in/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

function PostPage({ params }) {
  const { slug } = params;
  const [data, setData] = useState(null);

  const [isSaved, setIsSaved] = useState(false);

  const savePost = async () => {
    try {
      await axios.post("/api/savepost", {
        postSlug: data.slug,
        postTitle: data.title,
        postImg: data.img,
      });
      setIsSaved(true);
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(slug);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [slug]);
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API not supported in this browser.");
    }
  };
  return (
    <div className={styles.container}>
      {data && (
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{data.title}</h1>
            <div className="flex justify-between items-center">
              <div className={styles.user}>
                {data.user?.image && (
                  <div className={styles.userImageContainer}>
                    <Image
                      src={data.user.image}
                      alt=""
                      fill
                      className={styles.avatar}
                    />
                  </div>
                )}
                <div className={styles.userTextContainer}>
                  <span className={styles.username}>{data.user.name}</span>
                  <span className={styles.date}>
                    {data.createdAt.substring(0, 10)}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={savePost}
                  disabled={isSaved}
                  className="bg-indigo-500 cursor-pointer rounded text-white p-2"
                >
                  {isSaved ? (
                    "Saved"
                  ) : (
                    <CiBookmarkPlus className=" scale-150" />
                  )}
                </button>

                <button
                  className="bg-green-600 p-2 rounded text-white flex justify-between items-center gap-2"
                  onClick={handleShare}
                >
                  <span>Share</span>
                  <FaShareAlt />
                </button>
              </div>
            </div>
          </div>
          {data.img && (
            <div className={styles.imageContainer}>
              <Image src={data.img} alt="" fill className={styles.image} />
            </div>
          )}
        </div>
      )}
      <div className={styles.content}>
        <br />
        <div className="mt-3">
          <Article />
        </div>

        <div className={styles.post}>
          {/* {data && (
            <div className="pt-2 pb-2">
              <YouTubePlayer videoId={`${data.video}`} />
            </div>
          )} */}
          <div className={data && data.video ? "pt-2 pb-2" : "hidden"}>
            {data && data.video && <YouTubePlayer videoId={data.video} />}
          </div>
          {data && (
            <div
              className="quill-editor"
              dangerouslySetInnerHTML={{ __html: data.desc }}
            />
          )}
          {data && (
            <div className={styles.comment}>
              <Comments postSlug={slug} />
            </div>
          )}
        </div>
        <Article />

        <MenuCategories />
      </div>
    </div>
  );
}

export default PostPage;
