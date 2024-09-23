import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import LatestBlog from "@/components/latestBlog/LatestBlog";
import FeaturedArticle from "@/components/cardList/FeaturedArticle";
import Article from "@/components/ads/inArticle";
import { Benefits } from "@/components/new/Benefits";
import { SectionTitle } from "@/components/new/SectionTitle";
import { Testimonials } from "@/components/new/Testimonials";
import { Faq } from "@/components/new/Faq";
import { benefitOne } from "@/components/new/data";
export const metadata = {
  title:
    "Justskills - Read different topics on coding, design, web dev, projects, placement and more.",
  description:
    "Study different trending topics covering coding , technologies!",
  url: "https://study.justskills.in/",
  metadataBase: new URL("https://study.justskills.in/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title:
      "Justskills | Read different topics on coding, design, web dev, projects, placement and more.",
    description:
      "Study different trending topics covering coding , technologies!",
    url: "https://study.justskills.in/",
    metadataBase: new URL("https://study.justskills.in/"),
    images: "/cover.png",
  },
};

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <Article />
      <FeaturedArticle page={page} />

      <Article />
      {/* new section */}
      <Benefits data={benefitOne} />
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
                  href="https://study.justskills.in/"
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

      {/* exit new section */}
      <div className={styles.content}>
        <LatestBlog />
      </div>
      {/* category */}
      <Article />

      <Testimonials />

      <Faq />
      <section className="pt-20 pb-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl font-bold font-sans">
          AWESOME COMMUNITY
        </h1>
        <p className="text-center text-xl font-semibold font-sans text-indigo-600">
          Trusted by over 2000+ Students
        </p>
        <img src="/trust.png" className="h-32 p-6" />
      </section>
    </div>
  );
}
