import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import LatestBlog from "@/components/latestBlog/LatestBlog";
import FeaturedArticle from "@/components/cardList/FeaturedArticle";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <FeaturedArticle page={page} />
      <div className={styles.content}>
        <LatestBlog />
      </div>
    </div>
  );
}
