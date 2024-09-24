"use client";
// import { useEffect, useState } from "react";
// import styles from "@/app/posts/[slug]/singlePage.module.css";
// import Image from "next/image";
// import Comments from "@/components/comments/Comments";
// import MenuCategories from "../menuCategories/MenuCategories";
// import { FaShareAlt } from "react-icons/fa";
// import Article from "../ads/inArticle";
// import { CiBookmarkPlus } from "react-icons/ci";
// import { useSession } from "next-auth/react";
// import { IoBookmark } from "react-icons/io5";
// const getData = async (slug) => {
//   const res = await fetch(`https://justskills.in/api/posts/${slug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

// function PostPage({ params }) {
//   const { slug } = params;
//   const [data, setData] = useState(null);
//   const { session } = useSession();
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getData(slug);
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [slug]);
//   const handleShare = () => {
//     if (navigator.share) {
//       navigator
//         .share({
//           url: window.location.href,
//         })
//         .then(() => console.log("Successful share"))
//         .catch((error) => console.error("Error sharing:", error));
//     } else {
//       console.log("Web Share API not supported in this browser.");
//     }
//   };

//   const handleBookmark = async () => {
//     if (session === "unauthenticated") {
//       alert("You must be logged in to bookmark this post.");
//       return;
//     }

//     try {
//       // Sending a POST request to add the bookmark
//       const response = await fetch(`/api/bookmark`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ postId: data.id }), // Passing the post ID to the API
//       });

//       if (response.ok) {
//         setIsBookmarked(true);
//         console.log("Bookmark added successfully!");
//       } else {
//         const result = await response.json();
//         if (result.message === "Bookmark already exists!") {
//           console.log("This post is already bookmarked.");
//         } else {
//           console.error("Failed to add bookmark:", result.message);
//         }
//       }
//     } catch (error) {
//       console.error("Error bookmarking the post:", error);
//     }
//   };

//   const handleRemoveBookmark = async () => {
//     if (session === "unauthenticated") {
//       alert("You must be logged in to remove this bookmark.");
//       return;
//     }

//     try {
//       // Sending a DELETE request to remove the bookmark
//       const response = await fetch(`/api/bookmark`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ postId: data.id }), // Passing the post ID to the API
//       });

//       if (response.ok) {
//         setIsBookmarked(false);
//         console.log("Bookmark removed successfully!");
//       } else {
//         const result = await response.json();
//         if (result.message === "Bookmark not found!") {
//           console.log("This post is not bookmarked.");
//         } else {
//           console.error("Failed to remove bookmark:", result.message);
//         }
//       }
//     } catch (error) {
//       console.error("Error removing the bookmark:", error);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {data && (
//         <div className={styles.infoContainer}>
//           <div className={styles.textContainer}>
//             <h1 className={styles.title}>{data.title}</h1>
//             <div className="flex justify-between items-center">
//               <div className={styles.user}>
//                 {data.user?.image && (
//                   <div className={styles.userImageContainer}>
//                     <Image
//                       src={data.user.image}
//                       alt=""
//                       fill
//                       className={styles.avatar}
//                     />
//                   </div>
//                 )}
//                 <div className={styles.userTextContainer}>
//                   <span className={styles.username}>{data.user.name}</span>
//                   <span className={styles.date}>
//                     {data.createdAt.substring(0, 10)}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex gap-2 justify-center items-center">
//                 {isBookmarked ? (
//                   <IoBookmark
//                     onClick={handleBookmark}
//                     className=" scale-150 cursor-pointer"
//                   />
//                 ) : (
//                   <CiBookmarkPlus
//                     onClick={handleRemoveBookmark}
//                     className=" scale-150 cursor-pointer"
//                   />
//                 )}
//                 <button
//                   className="bg-green-600 p-2 rounded text-white flex justify-between items-center gap-2"
//                   onClick={handleShare}
//                 >
//                   <span>Share</span>
//                   <FaShareAlt />
//                 </button>
//               </div>
//             </div>
//           </div>
//           {data.img && (
//             <div className={styles.imageContainer}>
//               <Image src={data.img} alt="" fill className={styles.image} />
//             </div>
//           )}
//         </div>
//       )}
//       <div className={styles.content}>
//         <br />
//         <div className="mt-3">
//           <Article />
//         </div>
//         <div className={styles.post}>
//           {data && (
//             <div
//               className="quill-editor"
//               dangerouslySetInnerHTML={{ __html: data.desc }}
//             />
//           )}
//           {data && (
//             <div className={styles.comment}>
//               <Comments postSlug={slug} />
//             </div>
//           )}
//         </div>
//         <Article />

//         <MenuCategories />
//       </div>
//     </div>
//   );
// }

// export default PostPage;

import { useEffect, useState } from "react";
import styles from "@/app/posts/[slug]/singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import MenuCategories from "../menuCategories/MenuCategories";
import { FaShareAlt } from "react-icons/fa";
import Article from "../ads/inArticle";
import { CiBookmarkPlus } from "react-icons/ci";
import { useSession } from "next-auth/react";
import { IoBookmark } from "react-icons/io5";

const getData = async (slug) => {
  const res = await fetch(`https://justskills.in/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

function PostPage({ params }) {
  const { slug } = params;
  const [data, setData] = useState(null);
  const { data: session, status } = useSession();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(slug);
        setData(result);
        // Check if the post is bookmarked (assuming `bookmarks` contains an array of bookmarked post IDs)
        if (session?.user?.bookmarks?.includes(result.id)) {
          setIsBookmarked(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [slug, session]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API not supported in this browser.");
    }
  };

  const handleBookmark = async () => {
    if (status !== "authenticated") {
      alert("You must be logged in to bookmark this post.");
      return;
    }

    try {
      const response = await fetch(`/api/bookmark`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId: data.id }),
      });

      if (response.ok) {
        setIsBookmarked(true);
        console.log("Bookmark added successfully!");
      } else {
        const result = await response.json();
        if (result.message === "Bookmark already exists!") {
          console.log("This post is already bookmarked.");
        } else {
          console.error("Failed to add bookmark:", result.message);
        }
      }
    } catch (error) {
      console.error("Error bookmarking the post:", error);
    }
  };

  const handleRemoveBookmark = async () => {
    if (status !== "authenticated") {
      alert("You must be logged in to remove this bookmark.");
      return;
    }

    try {
      const response = await fetch(`/api/bookmark`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId: data.id }),
      });

      if (response.ok) {
        setIsBookmarked(false);
        console.log("Bookmark removed successfully!");
      } else {
        const result = await response.json();
        if (result.message === "Bookmark not found!") {
          console.log("This post is not bookmarked.");
        } else {
          console.error("Failed to remove bookmark:", result.message);
        }
      }
    } catch (error) {
      console.error("Error removing the bookmark:", error);
    }
  };

  return (
    <div className={styles.container}>
      {data && (
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{data.title}</h1>
            <div className="flex justify-between items-center">
              <div className={styles.user}>
                {data.user?.image && (
                  <div className={styles.userImageContainer}>
                    <Image
                      src={data.user.image}
                      alt=""
                      fill
                      className={styles.avatar}
                    />
                  </div>
                )}
                <div className={styles.userTextContainer}>
                  <span className={styles.username}>{data.user.name}</span>
                  <span className={styles.date}>
                    {data.createdAt.substring(0, 10)}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center">
                {isBookmarked ? (
                  <IoBookmark
                    onClick={handleRemoveBookmark}
                    className="scale-150 cursor-pointer"
                  />
                ) : (
                  <CiBookmarkPlus
                    onClick={handleBookmark}
                    className="scale-150 cursor-pointer"
                  />
                )}
                <button
                  className="bg-green-600 p-2 rounded text-white flex justify-between items-center gap-2"
                  onClick={handleShare}
                >
                  <span>Share</span>
                  <FaShareAlt />
                </button>
              </div>
            </div>
          </div>
          {data.img && (
            <div className={styles.imageContainer}>
              <Image src={data.img} alt="" fill className={styles.image} />
            </div>
          )}
        </div>
      )}
      <div className={styles.content}>
        <br />
        <div className="mt-3">
          <Article />
        </div>
        <div className={styles.post}>
          {data && (
            <div
              className="quill-editor"
              dangerouslySetInnerHTML={{ __html: data.desc }}
            />
          )}
          {data && (
            <div className={styles.comment}>
              <Comments postSlug={slug} />
            </div>
          )}
        </div>
        <Article />

        <MenuCategories />
      </div>
    </div>
  );
}

export default PostPage;
