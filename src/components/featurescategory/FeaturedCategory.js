"use client";
import React from "react";
import FeaturedCategoryCard from "../category/FeaturedCategoryCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
  {
    id: 1,
    title: "Data Structures",
    text: "Explore fundamental data structures with real-world examples.",
    url: "data-structure",
    imageUrl: "/data.jpg",
  },
  {
    id: 2,
    title: "Algorithms",
    text: "Learn essential algorithms with code snippets and explanations.",
    url: "algorithms",
    imageUrl: "/algorithm.png",
  },
  {
    id: 3,
    title: "System Design",
    text: "Master designing scalable systems with practical system design concepts.",
    url: "system-design",
    imageUrl: "/system.png",
  },
  {
    id: 4,
    title: "OOPS",
    text: "Understand object-oriented programming principles with clear use cases.",
    url: "object-oriented-programming",
    imageUrl: "/oops.jpg",
  },
  {
    id: 5,
    title: "Interview Experiences",
    text: "Real-world interview stories and insights from successful candidates.",
    url: "interview",
    imageUrl: "/interview.jpg",
  },
  {
    id: 6,
    title: "Behaviour Interview",
    text: "Tips and guidance for acing behavioral interview questions.",
    url: "behaviour-interview",
    imageUrl: "/binterview.jpeg",
  },
  {
    id: 7,
    title: "Emerging-tech",
    text: "Discover the latest trends and innovations in technology.",
    url: "emerging-tech",
    imageUrl: "/emerging.jpeg",
  },
  {
    id: 9,
    title: "Programming",
    text: "Dive into programming tutorials, languages, and developer tools.",
    url: "programming",
    imageUrl: "/programming.png",
  },
  {
    id: 10,
    title: "Project",
    text: "Hands-on project ideas and practical web development applications.",
    url: "project",
    imageUrl: "/project.jpeg",
  },
  {
    id: 11,
    title: "Leetcode Interview 150",
    text: "Expert advice and resources for cracking job placement interviews.",
    url: "leetcode-150",
    imageUrl: "/placemen.png",
  },
];
function FeaturedCategory() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <section className="">
        <div className="text-center justify-center mt-10">
          <h1 className="font-extrabold text-4xl pt-24 pb-10 md:text-6xl">
            Explore Justskills Category?
          </h1>
          <div className="bg-gradient-to-r  rounded-xl p-2">
            <div
              className="rounded-xl select-none justify-center bg-indigo-500 
              dark:bg-indigo-500 border w-full h-full flex flex-col pb-5"
            >
              <div className="py-10 px-8 text-white">
                <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
                  Justskills Explore
                </span>
                <p className="my-6 text-2xl font-semibold leading-10 text-white md:text-3xl">
                  Increase Knowledge with{" "}
                  <span className="whitespace-nowrap py-2 text-cyan-300 text-sm sm:text-3xl">
                    Trending Tech materials
                  </span>
                  .
                </p>
                <p className=" text-white">
                  For all avid readers, here&apos;s a carefully curated
                  collection of articles designed to enhance your skills in Data
                  Structures and Algorithms (DSA). Additionally, foundational
                  concepts of programming languages are included to cater to
                  absolute beginners.
                  <br />
                  <span className="font-sans font-bold">
                    Read on trending topics in technology, coding, web
                    development, app development, interviews etc.
                  </span>
                </p>
              </div>

              <Carousel
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={10000}
                showDots={true}
                dotListClass="custom-dot-list"
                customDot={<CustomDot />}
              >
                {data.map((category) => (
                  <div key={category.id} className="p-5">
                    <FeaturedCategoryCard
                      title={category.title}
                      text={category.text}
                      url={category.url}
                      imageUrl={category.imageUrl}
                    />
                  </div>
                ))}
              </Carousel>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
const CustomDot = ({ onClick, active }) => {
  return <div className="rounded-md"></div>;
};

export default FeaturedCategory;
