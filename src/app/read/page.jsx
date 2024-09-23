import CardList from "@/components/cardList/CardList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import styles from "./blogPage.module.css";
import MenuCategories from "@/components/menuCategories/MenuCategories";
import Link from "next/link";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  const metadata = {
    title: cat
      ? `Justskills - ${cat} articles`
      : "Justskills Trending articles",
  };
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={
            cat
              ? `Study different ${cat} articles on trending topics covering coding , technologies!`
              : "Study different articles on trending topics covering coding, new technologies."
          }
        />
        <meta property="og:title" content={metadata.title} />
        <meta
          name="og:description"
          content={
            cat
              ? `Study different ${cat} articles on trending topics covering coding , technologies!`
              : "Study different articles on trending topics covering coding, new technologies."
          }
        />

        <meta property="og:image" content="https://justskills.in/read.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content={
            cat
              ? `Study different ${cat} articles on trending topics covering coding , technologies!`
              : "Study different articles on trending topics covering coding, new technologies."
          }
        />
        <meta property="twitter:title" content={metadata.title} />

        <meta name="twitter:image" content="https://justskills.in/read.png" />
      </head>
      <Accordion
        type="single"
        collapsible
        className="border-0 rounded-lg  md:hidden"
      >
        <AccordionItem value="item-1" className=" border-2 rounded-lg p-2">
          <AccordionTrigger className="font-bold hover:no-underline text-3xl md:text-4xl">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-journal-code"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
              </svg>
            </div>
            Read
          </AccordionTrigger>
          <AccordionContent className="border-2 rounded-lg flex justify-between border-none ">
            {/* <div className="container w-full h-full bg-secondary rounded-lg p-5 md:hidden"> */}
            <div
              class="rounded-xl select-none flex-col justify-center bg-indigo-100 
        dark:bg-indigo-500 border  w-full h-full"
            >
              <div class=" py-10 px-8 text-white ">
                <span class="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
                  Justskills Read
                </span>
                <p class="my-6 text-3xl font-semibold leading-10 text-indigo-500 dark:text-white">
                  Increase Knowledge with{" "}
                  <span class="whitespace-nowrap py-2 text-cyan-300 sm: text-lg">
                    High-Quality Articles
                  </span>
                  .
                </p>
                <p class="mb-4 text-indigo-500 dark:text-white">
                  For all avid readers, here&apos;s a carefully curated
                  collection of articles designed to enhance your skills in Data
                  Structures and Algorithms (DSA).Additionally, foundational
                  concepts of programming languages are included to cater to
                  absolute beginners.
                </p>
                <a
                  href="/read"
                  target="blank"
                  class="font-semibold tracking-wide underline underline-offset-4 text-indigo-500 dark:text-white"
                >
                  Learn More
                </a>
              </div>
              <img className="rounded-lg object-cover" src="/read.png" />
            </div>
            {/* </div> */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex gap-0 md:gap-32 p-4 md:p-0">
        <div className="container w-full h-full bg-secondary rounded-lg p-5 hidden md:flex">
          <div
            class="rounded-xl select-none flex-col justify-center bg-indigo-100 
        dark:bg-indigo-500 border  w-full h-full"
          >
            <div class=" py-10 px-8 text-white ">
              <span class="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
                Justskills Read
              </span>
              <p class="my-6 text-3xl font-semibold leading-10 text-indigo-500 dark:text-white">
                Increase Knowledge with{" "}
                <span class="whitespace-nowrap py-2 text-cyan-300">
                  High-Quality Articles
                </span>
                .
              </p>
              <p class="mb-4 text-indigo-500 dark:text-white">
                For all avid readers, here&apos;s a carefully curated collection
                of articles designed to enhance your skills in Data Structures
                and Algorithms (DSA).Additionally, foundational concepts of
                programming languages are included to cater to absolute
                beginners.
              </p>
              <a
                href="/read"
                target="blank"
                class="font-semibold tracking-wide underline underline-offset-4 text-indigo-500 dark:text-white"
              >
                Learn More
              </a>
            </div>
            <img className="rounded-lg object-cover" src="/read.png" />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold pb-5 pt-5 font-sans">
            Read, Code, Create, Execute.
          </h1>
          <p className="leading-8 font-semibold text-slate-500 dark:text-white text-xl pb-5 pt-5">
            Welcome to JustSkills Read, your destination for premium text-based
            courses. Currently, we offer three courses, with more in
            development. Each course will receive weekly updates with new
            articles added incrementally, ensuring a steady stream of content
            for your learning journey.
          </p>
          <p className="leading-8 font-semibold text-slate-500 dark:text-white text-xl pb-5 pt-5">
            Now, if you&apos;re an absolute beginner and want to start with
            learning a programming language, we have 2 options for you:
          </p>

          {/* <h1 className="leading-8 text-2xl pb-5 pt-5">
            1.
            <span className="underline cursor-pointer  decoration-sky-500 pl-3 hover:text-indigo-400">
              <Link href={"/cpp-fundamentals"}>
                {" "}
                Language Fundamentals: C++{" "}
              </Link>
            </span>
          </h1> */}

          <p className="leading-8 font-semibold text-slate-500 dark:text-white text-xl pb-5 pt-5">
            This comprehensive Data Structures and Algorithms (DSA) course
            begins with foundational concepts and progresses to advanced topics,
            providing a thorough understanding and ample practice opportunities.
          </p>

          {/* <h1 className="leading-8 text-2xl pb-5 pt-5">
            2.
            <span className="underline cursor-pointer  decoration-sky-500 pl-3 hover:text-indigo-400">
              <Link href={"/data-structures"}> Data Structures </Link>
            </span>
          </h1>
          <h1 className="leading-8 text-2xl pb-5 pt-5">
            3.
            <span className="underline cursor-pointer  decoration-sky-500 pl-3 hover:text-indigo-400">
              <Link href={"/algorithms"}> Algorithms </Link>
            </span>
          </h1> */}
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>{cat} : Read different topics</h1>
        <div className={styles.content}>
          <CardList page={page} cat={cat} />
          <MenuCategories />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
