import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import MenuCategories from "@/components/menuCategories/MenuCategories";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  const metadata = {
    title: cat
      ? `Justskills - ${cat} articles`
      : "Justskills Trending articles",
  };
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={
            cat
              ? `Study different ${cat} articles on trending topics covering coding , technologies!`
              : "Study different articles on trending topics covering coding, new technologies."
          }
        />
        <meta property="og:title" content={metadata.title} />
        <meta
          name="og:description"
          content={
            cat
              ? `Study different ${cat} articles on trending topics covering coding , technologies!`
              : "Study different articles on trending topics covering coding, new technologies."
          }
        />

        <meta
          property="og:image"
          content="https://study.justskills.in/read.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content={
            cat
              ? `Study different ${cat} articles on trending topics covering coding , technologies!`
              : "Study different articles on trending topics covering coding, new technologies."
          }
        />
        <meta property="twitter:title" content={metadata.title} />

        <meta
          name="twitter:image"
          content="https://study.justskills.in/read.png"
        />
      </head>

      <div className={styles.container}>
        <h1 className={styles.title}>{cat} : Read different topics</h1>
        <div className={styles.content}>
          <CardList page={page} cat={cat} />
          <MenuCategories />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
