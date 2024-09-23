import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function CategoryCard({ title, url, text, imageUrl }) {
  return (
    <div className="border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden w-full max-w-sm mx-auto ">
      <Link href={`/read?cat=${url}`}>
        <div className="flex flex-col items-center p-4 cursor-pointer">
          {/* Image section */}
          <div className="w-full h-48 relative">
            <Image
              src={imageUrl}
              alt="category-image"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>

          {/* Content Section */}
          <div className="mt-4 w-full text-center">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="mt-2 text-gray-600 text-sm">{text}</p>
          </div>

          {/* External Link Icon */}
          <div className="mt-4 flex items-center justify-center text-indigo-700"></div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
