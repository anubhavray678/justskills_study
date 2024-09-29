"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
export default function Profile() {
  const { status, data } = useSession();
  const router = useRouter();
  const [savedPosts, setSavedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedBlogsCount, setDisplayedBlogsCount] = useState(9);

  // Fetch saved posts when the component mounts
  useEffect(() => {
    const fetchSavedPosts = async () => {
      try {
        const response = await axios.get("/api/savepost");
        setSavedPosts(response.data);
      } catch (error) {
        console.error("Error fetching saved posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedPosts();
  }, []);
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

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

  if (status === "authenticated" && data && data.user) {
    return (
      <div className="h-[100vh]">
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src={data.user.image}
            alt="User's Face"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-black font-semibold">
                {data.user.name}
              </p>
              <p className="text-slate-500 font-medium">{data.user.email}</p>
            </div>
            <button
              className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              onClick={signOut}
            >
              Logout
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Saved Posts</h2>
        <div className="saved-posts grid gap-4">
          {savedPosts.length > 0 ? (
            savedPosts.slice(0, displayedBlogsCount).map((post) => (
              <Link
                key={post.id}
                href={`/posts/${post.postSlug}`}
                className="block"
              >
                <div className="flex items-center justify-between bg-white border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                  {/* Title on the left */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {post.postTitle}
                    </h3>
                  </div>
                  {/* Image on the right */}
                  <div className="ml-4">
                    <ImageWithSpinner
                      src={post.postImg}
                      alt={post.postTitle}
                      url={post.slug}
                      className=" w-20 h-20 object-cover rounded-md"
                    />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No saved posts found.</p>
          )}
        </div>
        {displayedBlogsCount < savedPosts.length && (
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
  }

  return null;
}

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
