import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import MenuCategories from "@/components/menuCategories/MenuCategories";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} : Read different topics</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <MenuCategories />
      </div>
    </div>
  );
};

export default BlogPage;
