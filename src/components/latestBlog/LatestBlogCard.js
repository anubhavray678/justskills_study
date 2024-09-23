import React from "react";
import Link from "next/link";

const getBlog = async () => {
  try {
    // Replace 'http://api.example.com/posts' with the URL of your API server
    const response = await fetch("https://justskills.in/api/latest");

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error fetching blog posts: ${response.statusText}`);
    }

    // Parse the JSON response
    const posts = await response.json();

    // Sort the posts by upload time in descending order (newest first)
    // Assuming that each post object has a 'uploadTime' property
    const sortedPosts = posts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return sortedPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw new Error("Failed to fetch blog posts");
  }
};
async function LatestBlogCard({ displayedBlogsCount, loadMore }) {
  const blogs = await getBlog();
  return (
    <div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {blogs.slice(0, displayedBlogsCount).map((blog) => {
          return (
            <div className="" key={blog.id}>
              <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <img
                  alt=""
                  src={blog.img}
                  className="h-56 w-full object-fill"
                />

                <div className="p-4 sm:p-6">
                  <Link href={`/posts/${blog.slug}`}>
                    <h3 className="text-lg font-medium text-gray-900 hover:underline line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <Link href={`/posts/${blog.slug}`}>
                    <div
                      className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 hover:underline"
                      dangerouslySetInnerHTML={{
                        __html: blog?.desc,
                      }}
                    />
                  </Link>
                  <Link
                    href={`/posts/${blog.slug}`}
                    passHref
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-400"
                  >
                    <p>Read more</p>
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </Link>
                </div>
              </article>
            </div>
          );
        })}
        {/* "Load more" button */}
        {displayedBlogsCount < blogs.length && (
          <div className="text-center mt-4">
            <button
              onClick={loadMore}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-400 rounded-lg hover:bg-indigo-500"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LatestBlogCard;
