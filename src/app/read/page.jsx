import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import MenuCategories from "@/components/menuCategories/MenuCategories";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  const read =
    "https://www.springboard.com/blog/wp-content/uploads/2022/09/programmng-language.jpg";
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
      {/* <img
        src="https://blog.hubspot.com/hs-fs/hubfs/202_Reasons-Consumers-Read-Blogs.png?width=595&height=400&name=202_Reasons-Consumers-Read-Blogs.png"
        style={{
          objectFit: "fill",
          width: "100%",
          height: "400px",
          display: `${css}`,
        }}
      /> */}
      <div
        style={{
          backgroundColor: "",
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
        <MenuCategories />
      </div>
    </div>
  );
};

export default BlogPage;
