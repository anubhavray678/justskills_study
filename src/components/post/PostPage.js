"use client";
import { useEffect, useState } from "react";
import Menu from "@/components/Menu/Menu";
import styles from "@/app/posts/[slug]/singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`https://study.justskills.in/api/posts/${slug}`, {
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

  return (
    <div className={styles.container}>
      {data && (
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{data.title}</h1>
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
                  {" "}
                  {data.createdAt.substring(0, 10)}
                </span>
                <span className={styles.date}>
                  <span style={{ paddingRight: 10 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                    </svg>
                  </span>
                  <span>{data?.views}views</span>
                </span>
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
        <div className={styles.post}>
          {data && (
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: data.desc }}
            />
          )}
          {data && (
            <div className={styles.comment}>
              <Comments postSlug={slug} />
            </div>
          )}
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default PostPage;
