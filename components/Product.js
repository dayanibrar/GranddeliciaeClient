import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const Product = ({ course }) => {
  const { name, instructor, price, image, slug, paid, category } = course;
  return (
    <Link href={`/course/${slug}`}>
      <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition">
        <div className="flex items-end justify-end h-56 w-full bg-cover relative">
          <img
            src={image.Location}
            alt="book"
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
          />
          <button className="absolute z-10 p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-green-500 focus:outline-none focus:bg-green-500">
            <ShoppingCartIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">{course.name}</h3>
          <span className="text-gray-500 mt-2">${course.price}</span>
        </div>
      </div>
      </Link>
  );
};

export default Product;