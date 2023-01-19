import { Card } from "antd";
import { currencyFormatter } from "../utils/helpers";
import {useState, useEffect, useContext } from "react";
import { Context } from "../context";

const { Meta } = Card;

const Cards = ({ course }) => {
  const { name, instructor, description, price, image, slug, paid, category } =
    course;
  // console.log(image);

  const { state, dispatch } = useContext(Context);
  const { published } = state;

  return (
    <div className="">
 {/* { category.sold && (<div> This gets rendered when sold is true</div>)} */}
    {course.published == true &&  (<>
      <div className="group  w-full h-full relative p-4 border-r border-b border-gray-200 sm:p-6">
        <div className="h-72 rounded-xl overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
          <img
            src={image.Location}
            alt={image.Location}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="pt-10 pb-4 text-left">
          <h3 className="text-sm font-medium text-gray-900">
            <a href={`/books/${slug}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <div className="mt-3 flex flex-col items-center">
          
            <p className="mt-1 text-sm text-left text-gray-500"> </p>
          </div>
          <p className="mt-4 text-sm font-medium text-gray-500">
          {category}
          </p>
          <p className="mt-4 text-base font-medium text-gray-900">
                {paid
              ? currencyFormatter({
                  amount: price,
                  currency: "usd",
                })
              : "Free"}
          </p>
        </div>
      </div>
    </>)}
     
    </div>
  );
};

export default Cards;

{
  /* <div className="h-screen overflow-hidden flex items-center justify-center">
                <div tabindex="0" className="focus:outline-none">
                    <div className="mx-auto container py-8">
                        <div className="flex flex-wrap items-center lg:justify-between justify-center">
                            <div tabindex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                                <div>
                                    <img alt="person capturing an image" src="../mainbg.jpg" tabindex="0" className="focus:outline-none w-full h-44" />
                                </div>
                                <div className="bg-white">
                                    <div className="p-4">
                                        <div className="flex items-center">
                                            <h2 tabindex="0" className="focus:outline-none text-lg font-semibold">{name}</h2>
                                            <p tabindex="0" className="focus:outline-none text-xs text-gray-600 pl-5">By {instructor.name}</p>
                                        </div>
                                        <p tabindex="0" className="focus:outline-none text-xs text-gray-600 mt-2"> {description && description.substring(0, 160)}...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */
}
