import React from "react";

function FeaturedCategory() {
  return (
    <div>
      <section className="">
        <div className="text-center justify-center mt-10">
          <h1 className="font-extrabold text-4xl pt-24 pb-10 md:text-6xl">
            What&apos;s Justskills Study?
          </h1>
          <div className="bg-gradient-to-r  rounded-xl p-2">
            <div
              className="rounded-xl select-none justify-center bg-indigo-100 
              dark:bg-indigo-500 border w-full h-full flex flex-col md:flex-row"
            >
              <div className="py-10 px-8 text-white">
                <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
                  Justskills Study
                </span>
                <p className="my-6 text-2xl font-semibold leading-10 text-indigo-500 dark:text-white md:text-3xl">
                  Increase Knowledge with{" "}
                  <span className="whitespace-nowrap py-2 text-cyan-300 text-sm sm:text-3xl">
                    Trending Tech materials
                  </span>
                  .
                </p>
                <p className="mb-8 text-indigo-500 dark:text-white">
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
                <a
                  href="https://justskills.in/"
                  target="blank"
                  className="font-semibold tracking-wide underline-offset-4 text-indigo-500 dark:text-white border-white border-2 p-2 rounded-lg hover:bg-indigo-400"
                >
                  Learn More
                </a>
              </div>
              <div className="w-[100%]">
                <img
                  className="rounded-lg object-cover h-full"
                  src="/study.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedCategory;
