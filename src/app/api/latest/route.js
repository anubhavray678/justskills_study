// import prisma from "@/utils/connect";
// import { NextResponse } from "next/server";

// export const GET = async (req) => {
//   try {
//     // Function to fetch all blog post data
//     const fetchBlogPosts = async () => {
//       const posts = await prisma.post.findMany();
//       return posts;
//     };

//     // Fetch blog post data
//     const posts = await fetchBlogPosts();

//     // Return the posts in JSON format with a status code of 200
//     return NextResponse.json(posts, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching blog posts:", error);

//     // Return an error message in JSON format with a status code of 500
//     return NextResponse.json(
//       { message: "Something went wrong!" },
//       { status: 500 }
//     );
//   }
// };

// // Polling mechanism to fetch data every minute
// const interval = setInterval(async () => {
//   try {
//     const posts = await fetchBlogPosts();
//     console.log("Updated blog posts:", posts);
//     // Log the updated posts
//   } catch (error) {
//     console.error("Error fetching blog posts:", error);
//   }
// }, 30000);
// // Fetch data every 60 seconds

// // Clean up the interval on server shutdown
// export const onServerShutdown = () => {
//   clearInterval(interval);
// };

// pages/api/posts.js
import clientPromise from "@/utils/connectMongo";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const client = await clientPromise;
    const db = client.db("your-database-name"); // Replace with your database name
    const posts = await db.collection("posts").find({}).toArray();

    return NextResponse.json(posts, {
      status: 200,
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);

    return NextResponse.json(
      { message: "Something went wrong!" },
      {
        status: 500,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "Surrogate-Control": "no-store",
        },
      }
    );
  }
};
