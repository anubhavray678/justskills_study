import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import LatestBlog from "@/components/latestBlog/LatestBlog";
import FeaturedArticle from "@/components/cardList/FeaturedArticle";
import Article from "@/components/ads/inArticle";

export const metadata = {
  title:
    "Justskills - Read different topics on coding, design, web dev, projects, placement and more.",
  description:
    "Study different trending topics covering coding , technologies!",
  url: "https://study.justskills.in/",
  metadataBase: new URL("https://study.justskills.in/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title:
      "Justskills | Read different topics on coding, design, web dev, projects, placement and more.",
    description:
      "Study different trending topics covering coding , technologies!",
    url: "https://study.justskills.in/",
    metadataBase: new URL("https://study.justskills.in/"),
    images: "/cover.png",
  },
};

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <Article />
      <FeaturedArticle page={page} />

      <Article />
      <div className={styles.content}>
        <LatestBlog />
      </div>
    </div>
  );
}
