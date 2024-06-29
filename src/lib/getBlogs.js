import prisma from "@/utils/connect";

export default async function getBlogs() {
  try {
    // Fetch all blog posts
    const posts = await prisma.post.findMany();
    // console.log(posts);

    // Generate URLs for each blog post
    const urls = posts.map((post) => ({
      url: `https://blog.fastbricks.in/posts/${post.slug}`,
      lastModified: post.createdAt, // Assuming there's an updatedAt field in your database
      changeFrequency: "daily", // Adjust according to your preference
      priority: 0.7, // Adjust according to your preference
    }));

    // Return the array of URLs
    return urls;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw new Error("Failed to fetch blog posts");
  }
}
