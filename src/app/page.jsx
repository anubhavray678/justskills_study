import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import LatestBlog from "@/components/latestBlog/LatestBlog";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <div className={styles.content}>
        <LatestBlog />

        <Menu />
      </div>
    </div>
  );
}
