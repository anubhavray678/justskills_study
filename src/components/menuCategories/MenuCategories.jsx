import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <div className="pl-1">
        <h2 className="text-xl font-sans font-bold">Discover by Categories</h2>
        <div className="flex place-items-center">
          <h1 className="underline font-sans">Explore all articles</h1>
          <MdArrowOutward />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 w-full items-center place-items-center">
        <Link href="/read?cat=data-structure">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">
                Data Structures
              </li>
              <li className="font-sans ">
                Explore fundamental data structures with real-world examples.
              </li>
            </ul>
            <FaExternalLinkAlt className="text-indigo-700 scale-150 h-5 w-5" />
          </div>
        </Link>
        <Link href="/read?cat=algorithms">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">Algorithms</li>
              <li className="font-sans ">
                Learn essential algorithms with code snippets and explanations.
              </li>
            </ul>
            <FaExternalLinkAlt className="text-indigo-700 scale-150 h-5 w-5" />
          </div>
        </Link>
        <Link href="/read?cat=system-design">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">
                System Design
              </li>
              <li className="font-sans ">
                Master designing scalable systems with practical system design
                concepts.
              </li>
            </ul>
            <FaExternalLinkAlt className="text-indigo-700 scale-150 h-5 w-5" />
          </div>
        </Link>
        <Link href="/read?cat=object-oriented-programming">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">OOPS</li>
              <li className="font-sans ">
                Understand object-oriented programming principles with clear use
                cases.
              </li>
            </ul>
            <FaExternalLinkAlt className="text-indigo-700 scale-150 h-5 w-5" />
          </div>
        </Link>
        <Link href="/read?cat=interview">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">
                Interview Experiences
              </li>
              <li className="font-sans ">
                Real-world interview stories and insights from successful
                candidates.
              </li>
            </ul>
            <FaExternalLinkAlt className="text-indigo-700 scale-150 h-5 w-5" />
          </div>
        </Link>
        <Link href="/read?cat=behaviour-interview">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">
                Behaviour Interview
              </li>
              <li className="font-sans ">
                Tips and guidance for acing behavioral interview questions.
              </li>
            </ul>
            <FaExternalLinkAlt className="text-indigo-700 scale-150 h-5 w-5" />
          </div>
        </Link>
        <Link href="/read?cat=emerging-tech">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">
                Emerging-tech
              </li>
              <li className="font-sans ">
                Discover the latest trends and innovations in technology.
              </li>
            </ul>
            <FaExternalLinkAlt className="text-indigo-700 scale-150 h-5 w-5" />
          </div>
        </Link>
        <Link href="/read?cat=programming">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">Programming</li>
              <li className="font-sans ">
                Dive into programming tutorials, languages, and developer tools.
              </li>
            </ul>
            <FaExternalLinkAlt className="text-indigo-700 scale-150 h-5 w-5" />
          </div>
        </Link>

        <Link href="/read?cat=project">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">Project</li>
              <li className="font-sans ">
                Hands-on project ideas and practical web development
                applications.
              </li>
            </ul>
            <FaExternalLinkAlt className="text-indigo-700 scale-150 h-5 w-5" />
          </div>
        </Link>
        <Link href="/read?cat=placement">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">Placement</li>
              <li className="font-sans ">
                Expert advice and resources for cracking job placement
                interviews.
              </li>
            </ul>
            <FaExternalLinkAlt className="text-indigo-700 scale-150 h-5 w-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategories;
