"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { generateSlug } from "@/lib/generateSlug";
import { Plus } from "lucide-react";
import React from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

import dynamic from "next/dynamic";

const ReactQuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  // Import ReactQuill dynamically
  ssr: false, // Exclude it from server-side rendering
});
const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [video, setVideo] = useState("");

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  // if (status === "unauthenticated") {
  //   router.push("/");
  // }

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        video,
        desc: value,
        img: media,
        slug: slug,
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  function handleTitle(e) {
    const newTitle = e.target.value;
    setTitle(newTitle);
    const autoSlug = generateSlug(newTitle);
    setSlug(autoSlug);
  }
  function handleVideo(e) {
    const newVideo = e.target.value;
    setVideo(newVideo);
  }

  //Custom Tool Bar
  const customColors = [
    "red",
    "green",
    "blue",
    "purple",
    "white",
    "gray",
    "indigo",
    "skyblue",
  ];
  const customBackgroundColors = [
    "red",
    "green",
    "blue",
    "purple",
    "yellow",
    "skyblue",
  ];
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: customColors }, { background: customBackgroundColors }],
      ["link"],
      ["clean"],
      ["code-block"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  return (
    <>
      <div>
        <div className="text-4xl text-center font-semibold py-4 justify-center flex bg-[#06c49c]">
          <img src="r.png" />
        </div>
        <div className="flex items-center gap-2 pt-5 justify-between pl-2 pr-2">
          <div className="flex gap-2">
            <select
              className="border"
              onChange={(e) => setCatSlug(e.target.value)}
            >
              <option value="leetcode-150">Leetcode - Top Interview 150</option>
              <option value="data-structure">Data Structures</option>
              <option value="algorithms">Algorithms</option>
              <option value="system-design">System Design</option>
              <option value="object-oriented-programming"> OOPS</option>
              <option value="interview">Interview Experiences</option>
              <option value="behaviour-interview">Behaviour Interview </option>
              <option value="emerging-tech">emerging-tech</option>
              <option value="programming">Programming</option>
              <option value="project">project</option>
            </select>
            <div>
              <button className={styles.button} onClick={() => setOpen(!open)}>
                <Plus className="w-5 h-5 " />
              </button>
              {open && (
                <div className={styles.add}>
                  <input
                    type="file"
                    id="image"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                  <button className={styles.addButton}>
                    <label htmlFor="image">
                      <Image src="/image.png" alt="" width={16} height={16} />
                    </label>
                  </button>
                  <button className={styles.addButton}>
                    <Image src="/external.png" alt="" width={16} height={16} />
                  </button>
                  <button className={styles.addButton}>
                    <Image src="/video.png" alt="" width={16} height={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
          <button className={styles.publish} onClick={handleSubmit}>
            Publish
          </button>
        </div>
        <div className="grid grid-cols-1 p-8 gap-4">
          {/* Blog Editor */}
          <div className="w-full max-w-5xl p-10 my-3 bg-white border border-gray-200 rounded-lg shadow mx-auto">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Title */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
                  onChange={(e) => setTitle(e.target.value)}
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleTitle}
                    type="text"
                    value={title}
                    name="title"
                    id="title"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    placeholder="Type the Course title"
                  />
                </div>
              </div>
              {/* videoLink */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="video"
                  className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
                  onChange={(e) => setVideo(e.target.value)}
                >
                  Video URL
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleVideo}
                    type="text"
                    value={video}
                    name="video"
                    id="video"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    placeholder="your article video url here"
                  />
                </div>
              </div>
              {/* Slug */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="slug"
                  className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
                >
                  Slug
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => setSlug(e.target.value)}
                    type="text"
                    value={slug}
                    name="slug"
                    id="slug"
                    autoComplete="slug"
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    placeholder="Type the Course title"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Content
                </label>
                <ReactQuillNoSSRWrapper
                  theme="snow"
                  modules={modules}
                  // formats={formats}
                  formats={[
                    "header",
                    "font",
                    "size",
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "blockquote",
                    "list",
                    "bullet",
                    "color",
                    "background",
                    "link",
                    "code-block",
                  ]}
                  className="quill-editor"
                  value={value}
                  onChange={setValue}
                  placeholder="write your article here..."
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold flex justify-center mt-8">
                Preview
              </h2>
              <div>{value}</div>
              <div
                dangerouslySetInnerHTML={{ __html: value }}
                className="quill-editor"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritePage;
