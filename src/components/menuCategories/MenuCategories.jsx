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
        <Link href="/read?cat=android">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">Android</li>
              <li className="font-sans ">
                Stay updated with the latest Android news, including new
                releases, updates, tips, and tricks.
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
                Dive into the world of emerging technologies, covering
                innovations and trends.
              </li>
            </ul>
            <FaExternalLinkAlt className="text-indigo-700 scale-150 h-5 w-5" />
          </div>
        </Link>
        <Link href="/read?cat=coding">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">Coding</li>
              <li className="font-sans ">
                Explore coding tutorials, best practices, new programming
                languages, and developer tools.
              </li>
            </ul>
            <FaExternalLinkAlt className="text-indigo-700 scale-150 h-5 w-5" />
          </div>
        </Link>
        <Link href="/read?cat=travel">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">Travel</li>
              <li className="font-sans ">
                Discover travel guides, tips, and inspirational stories about
                the most beautiful destinations.
              </li>
            </ul>
            <FaExternalLinkAlt className="text-indigo-700 scale-150 h-5 w-5" />
          </div>
        </Link>
        <Link href="/read?cat=culture">
          <div className={styles.categoryItem}>
            <ul>
              <li className="text-xl font-sans font-semibold ">Culture</li>
              <li className="font-sans ">
                Learn about different cultures, traditions, and social practices
                from various communities.
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
                Get insights and advice on job placements, including interview
                experiences.
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
