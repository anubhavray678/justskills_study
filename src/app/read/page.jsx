import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  const images = [
    { id: "1", category: "fashion", imgUrl: "/culture.png" },
    { id: "2", category: "style", imgUrl: "/coding.png" },
    { id: "3", category: "coding", imgUrl: "/read.png" },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} : Read different topics</h1>
      <div
        style={{
          backgroundColor: "#886bfa",
          display: "flex",
          justifyContent: "center",
          objectFit: "cover",
          height: "300px",
        }}
      >
        {images.map((id) => {
          if (id.category === cat) {
            var imgNew = id.imgUrl;
            var newId = id;
          } else {
            return <></>;
          }
          return (
            // <div>
            <img
              key={newId}
              src={imgNew}
              alt=""
              className="invisible"
              style={{ objectFit: "cover", width: "100vw", height: "100%" }}
            />
            // </div>
          );
        })}
      </div>

      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
