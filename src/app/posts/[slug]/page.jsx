import LatestBlog from "@/components/latestBlog/LatestBlog";
import PostPage from "@/components/post/PostPage";

const getData = async (slug) => {
  const res = await fetch(`https://study.justskills.in/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  // fetch data
  const post = await getData(params.slug);
  const title = post?.title;
  const description = post?.desc;
  const image = post.img;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: title,
    description: description,
    openGraph: {
      images: [image],
    },
  };
}

const SinglePage = ({ params }) => {
  return (
    <>
      <PostPage params={params} />
      <LatestBlog />
    </>
  );
};

export default SinglePage;
