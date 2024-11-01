import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import LatestBlog from "@/components/latestBlog/LatestBlog";
import FeaturedArticle from "@/components/cardList/FeaturedArticle";
import Article from "@/components/ads/inArticle";
import { Benefits } from "@/components/new/Benefits";
import { Testimonials } from "@/components/new/Testimonials";
import { Faq } from "@/components/new/Faq";
import { benefitOne } from "@/components/new/data";
import FeaturedCategory from "@/components/featurescategory/FeaturedCategory";

export const metadata = {
  title:
    "Justskills - Read different topics on coding, design, web dev, projects, placement and more.",
  description:
    "Study different trending topics covering coding , technologies!",
  url: "https://justskills.in/",
  metadataBase: new URL("https://justskills.in/"),
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
    url: "https://justskills.in/",
    metadataBase: new URL("https://justskills.in/"),
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
      <FeaturedCategory />

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
