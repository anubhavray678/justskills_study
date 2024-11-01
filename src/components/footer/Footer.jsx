"use client";
const currentYear = new Date().getFullYear();
import Image from "next/image";
import Link from "next/link";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsappIcon from "@mui/icons-material/WhatsApp";

import DialogBox from "../reusables/DialogBox";
import TermsAndCons from "../reusables/TermsAndCons";
import PrivacyPolicy from "../reusables/PrivacyPolicy";

export default function Footer() {
  return (
    <footer className="border-t dark:bg-secondary pt-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center gap-2">
              <Image src={logo} alt="" className="Applogo" />
              <span className="font-extrabold text-purple-500 text-2xl font-serif whitespace-nowrap">
                Just
                <span className="text-yellow-500 font-extrabold">Skills</span>
              </span>
            </a>
          </div> */}
          <div className="grid sm:flex justify-around justify-items-center gap-8 sm:gap-6 sm:grid-cols-2 w-full text-center">
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium"></ul>
            </div> */}

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <DialogBox
                    dialogType={"body"}
                    buttonName={"Privacy Policy"}
                    title={"Privacy Policy"}
                    content={<PrivacyPolicy />}
                  />
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    <DialogBox
                      dialogType={"paper"}
                      buttonName={"Terms of Service"}
                      title={"Terms of Service"}
                      content={<TermsAndCons />}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">Company</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://justskills.in/about"
                    className=" hover:underline"
                  >
                    About
                  </a>
                </li>
                <li className="mb-4"></li>
                <li className="mb-4">
                  <a
                    href="https://justskills.in/contact"
                    className="hover:underline"
                  >
                    Contact
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://justskills.in/read"
                    className="hover:underline"
                  >
                    Read
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://justskills.in/jobmatch"
                    className="hover:underline"
                  >
                    JobMatch
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://compresify.justskills.in"
                    className="hover:underline"
                  >
                    Compresify
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">
                Category
              </h2>

              <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                <li className="mb-4">
                  <a
                    href="https://justskills.in/read?cat=data-structure"
                    className="hover:underline"
                  >
                    Data Structures
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://justskills.in/read?cat=emerging-tech"
                    className="hover:underline"
                  >
                    Emerging-tech
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://justskills.in/read?cat=programming"
                    className="hover:underline"
                  >
                    Programming
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://justskills.in/read?cat=project"
                    className="hover:underline"
                  >
                    Project
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://justskills.in/read?cat=leetcode-150"
                    className="hover:underline"
                  >
                    Leetcode Top 150
                  </a>
                </li>
              </ul>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://justskills.in/read?cat=algorithms"
                    className="hover:underline"
                  >
                    Algorithms
                  </a>
                </li>

                <li className="mb-4">
                  <a
                    href="https://justskills.in/read?cat=interview"
                    className="hover:underline"
                  >
                    Interview
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://justskills.in/read?cat=object-oriented-programming"
                    className="hover:underline"
                  >
                    OOPS
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://justskills.in/read?cat=system-design"
                    className="hover:underline"
                  >
                    System design
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; {currentYear}
            <a href="/" className="hover:underline">
              JustSkills
            </a>
            . All Rights Reserved.
          </span>
          <div className=" flex justify-center mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://t.me/JustForSkill"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <TelegramIcon />
              <span className="sr-only">Telegram community</span>
            </a>
            <a
              href="https://www.whatsapp.com/channel/0029Vaig2vY2ER6kBlzAIc0g"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <WhatsappIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
