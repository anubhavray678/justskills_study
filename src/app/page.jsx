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
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3581583340976914"
        crossorigin="anonymous"
      ></script>
      <ins
        class="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3581583340976914"
        data-ad-slot="8601243193"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <FeaturedArticle page={page} />
      <div className={styles.content}>
        <LatestBlog />
      </div>
    </div>
  );
}
