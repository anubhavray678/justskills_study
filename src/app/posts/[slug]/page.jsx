import Article from "@/components/ads/inArticle";
import LatestBlog from "@/components/latestBlog/LatestBlog";
import PostPage from "@/components/post/PostPage";
import Head from "next/head";

const getData = async (slug) => {
  const res = await fetch(`https://justskills.in/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

// export async function generateMetadata({ params, searchParams }, parent) {
//   // read route params
//   const id = params.id;

//   // fetch data
//   const post = await getData(params.slug);
//   const title = post?.title;
//   const description = post?.desc;
//   const image = post.img;

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: title,
//     description: description,
//     openGraph: {
//       images: image,
//     },
//     twitter: {
//       images: image,
//     },
//   };
// }

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

const SinglePage = async ({ params }) => {
  // const post = await getData(params.slug);
  // const title = post?.title;
  // const description = post?.desc;
  // const image = post.img;
  return (
    <>
      {/* <Head>
        <title>title</title>
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={`${description}`} />
        <meta property="og:image" content={`${image}`} />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${image}`} />
      </Head> */}
      <PostPage params={params} />
      <Article />
      <LatestBlog />
    </>
  );
};

export default SinglePage;
