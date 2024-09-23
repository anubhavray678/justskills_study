"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ClipLoader from "react-spinners/ClipLoader"; // Import the spinner
import MenuCategories from "../menuCategories/MenuCategories";
import { Adsense } from "@ctrl/react-adsense";
import FeedAdd from "../ads/FeedAdd";

const getBlog = async () => {
  try {
    const response = await fetch("https://justskills.in/api/latest");

    if (!response.ok) {
      throw new Error(`Error fetching blog posts: ${response.statusText}`);
    }

    const posts = await response.json();
    return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw new Error("Failed to fetch blog posts");
  }
};

const LatestBlog = () => {
  const [displayedBlogsCount, setDisplayedBlogsCount] = useState(9);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const fetchedBlogs = await getBlog();
      setBlogs(fetchedBlogs);
      setError(null); // Reset the error state on successful fetch
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch blogs initially
    fetchBlogs();

    // Set up polling
    const interval = setInterval(fetchBlogs, 60000); // Fetch data every 60 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const loadMore = () => {
    setDisplayedBlogsCount((prevCount) => prevCount + 3);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <ClipLoader size={50} color={"#8a4dfa"} loading={loading} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <p>{error}</p>
        <button
          onClick={fetchBlogs}
          className="mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-400 rounded-lg hover:bg-indigo-500"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h2 className="text-3xl uppercase font-extrabold  text-center font-sans">
        LATEST ARTICLES
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-2/3">
          {blogs.slice(0, displayedBlogsCount).map((blog) => (
            <div key={blog.id}>
              <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <ImageWithSpinner
                  src={blog.img}
                  alt={blog.title}
                  url={blog.slug}
                />

                <div className="p-4 sm:p-6">
                  <Link href={`/posts/${blog.slug}`} passHref>
                    <h3 className="text-lg font-medium text-gray-900 hover:underline line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <Link href={`/posts/${blog.slug}`} passHref>
                    <div
                      className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 hover:underline"
                      dangerouslySetInnerHTML={{ __html: blog.desc }}
                    />
                  </Link>
                  <Link
                    href={`/posts/${blog.slug}`}
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-400"
                    aria-label={`Read more about ${blog.title}`}
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
          ))}
        </div>
        {/* <MenuCategories className="" /> */}
        <div className="">
          {blogs.slice(0, displayedBlogsCount).map((blog) => (
            <>
              <div key={blog.id} className="mt-2 mb-2">
                <FeedAdd />
              </div>
            </>
          ))}
        </div>
      </div>

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
  );
};

// A new component to handle the image loading
const ImageWithSpinner = ({ src, alt, url }) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="relative h-56 w-full">
      {imageLoading && (
        <div className="absolute inset-0 flex justify-center items-center">
          <ClipLoader size={50} color={"#8a4dfa"} loading={imageLoading} />
        </div>
      )}
      <Link href={`/posts/${url}`} passHref>
        <img
          src={src}
          alt={alt}
          className={`h-56 w-full object-fill transition-opacity duration-500 ${
            imageLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setImageLoading(false)}
        />
      </Link>
    </div>
  );
};

export default LatestBlog;
