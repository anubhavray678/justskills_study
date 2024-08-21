// import React from "react";
// import styles from "./footer.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "@/assets/logo.png";

// const Footer = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.info}>
//         <div className={styles.icons}>
//           <div className={styles.logo}>
//             <Image src={logo} alt="" className="Applogo" />
//             <div>
//               Just<span style={{ color: " rgb(234 179 8)" }}>Skills</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.links}>
//         <div className={styles.list}>
//           <span className={styles.listTitle}>Links</span>
//           <Link href="/">Homepage</Link>
//           <Link href="/read">Read</Link>
//           <Link href="https://justskills.in/about">About</Link>
//           <Link href="https://justskills.in/contact">Contact</Link>
//         </div>
//         <div className={styles.list}>
//           <span className={styles.listTitle}>Categories</span>
//           <Link href="/read?cat=style">Android</Link>
//           <Link href="/read?cat=fashion">Emerging Tech</Link>
//           <Link href="/read?cat=coding">Coding</Link>
//           <Link href="/read?cat=travel">Placement</Link>
//         </div>
//         <div className={styles.list}>
//           <span className={styles.listTitle}>Social</span>

//           <Link href="/">Email</Link>
//           <Link href="https://t.me/JustForSkill">Telegram</Link>
//           <Link href="https://www.youtube.com/@Justskills_">Youtube</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
"use client";
import React from "react";
const currentYear = new Date().getFullYear();
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="">
      <footer class="flex w-full flex-col items-center justify-center md:flex-row md:justify-between mt-5">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://justskills.in/about"
                    class=" hover:underline"
                  >
                    About
                  </a>
                </li>
                <li class="mb-4"></li>
                <li class="mb-4">
                  <a
                    href="https://justskills.in/contact"
                    class="hover:underline"
                  >
                    Contact
                  </a>
                </li>
                <li class="mb-4">
                  <a href="https://justskills.in/read" class="hover:underline">
                    Read
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <h1>Category</h1>
                </li>
                <li class="mb-4">
                  <a
                    href="https://study.justskills.in/read?cat=android"
                    class="hover:underline"
                  >
                    Android
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://study.justskills.in/read?cat=emerging-tech"
                    class="hover:underline"
                  >
                    Emerging-tech
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://justskills.in/course"
                    class="hover:underline"
                  >
                    Course
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://justskills.in/jobsearch"
                    class="hover:underline"
                  >
                    JobSearch
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://compresify.justskills.in/"
                    class="hover:underline"
                  >
                    Compresify
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://study.justskills.in/read?cat=coding"
                    class="hover:underline"
                  >
                    Coding
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://study.justskills.in/read?cat=project"
                    class="hover:underline"
                  >
                    Project
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://study.justskills.in/read?cat=placement"
                    class="hover:underline"
                  >
                    Placement
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="flex w-full flex-col items-center justify-center border-t-[4px] border-white py-4 md:flex-row md:justify-between">
        <p
          variant="small"
          className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
        >
          &copy; {currentYear} <a href="https://justskills.in/">JustSkills</a>.
          All Rights Reserved.
        </p>
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <a
            as="a"
            href="https://t.me/JustForSkill"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <FaTelegramPlane />
          </a>
          <a
            as="a"
            href="https://whatsapp.com/channel/0029Vaig2vY2ER6kBlzAIc0g"
            className="opacity-80 transition-opacity hover:opacity-100 cursor-pointer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
