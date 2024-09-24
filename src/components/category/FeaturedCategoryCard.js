import Image from "next/image";
import Link from "next/link";
import React from "react";

function FeaturedCategoryCard({ title, url, text, imageUrl }) {
  return (
    <div>
      <div className="border bg-white border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden w-full max-w-sm mx-auto ">
        <Link href={`/read?cat=${url}`}>
          <div className="flex flex-row items-center p-4 cursor-pointer">
            {/* Image section */}
            <div className="w-full h-48 relative">
              <Image
                src={imageUrl}
                alt="category-image"
                layout="fill"
                objectFit="fill"
                className="rounded-t-lg"
              />
            </div>

            {/* Content Section */}
            <div className="mt-4 w-full text-center">
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
              <p className="mt-2 text-gray-600 text-sm">{text}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCategoryCard;
