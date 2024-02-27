import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  const images = [
    { id: "1", category: "android", imgUrl: "/culture.png" },
    { id: "2", category: "emerging-tech", imgUrl: "/coding.png" },
    {
      id: "5",
      category: "coding",
      imgUrl:
        "https://www.springboard.com/blog/wp-content/uploads/2022/09/programmng-language.jpg",
    },
    { id: "4", category: "placement", imgUrl: "/read.png" },
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
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
