import { Card, Badge } from "antd";
import Link from "next/link";
import { currencyFormatter } from "../utils/helpers";
import { useContext, useEffect, useState } from "react";
import * as Realm from "realm-web";
import { Context } from "../context";
/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/solid'


const { Meta } = Card;

const products = [
    {
      id: 1,
      name: 'Organize Basic Set (Walnut)',
      price: '$149',
      rating: 5,
      reviewCount: 38,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
      imageAlt: 'TODO',
      href: '#',
    },
    {
      id: 2,
      name: 'Organize Pen Holder',
      price: '$15',
      rating: 5,
      reviewCount: 18,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
      imageAlt: 'TODO',
      href: '#',
    },
    {
      id: 3,
      name: 'Organize Sticky Note Holder',
      price: '$15',
      rating: 5,
      reviewCount: 14,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
      imageAlt: 'TODO',
      href: '#',
    },
    {
      id: 4,
      name: 'Organize Phone Holder',
      price: '$15',
      rating: 4,
      reviewCount: 21,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
      imageAlt: 'TODO',
      href: '#',
    },
    // More products...
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Example = ({ course }) => {
    const { name, instructor, description, price, image, slug, paid, category } = course;
    const [courses, setProducts] = useState([]);
    const { searchBook, setSearchBook } = useContext(Context);


  return (
   <>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          
            <div  className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
              <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="pt-10 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <a >
                    <span aria-hidden="true" className="absolute inset-0" />
                    {name}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">1 out of 5 stars</p>
                 
                  <p className="mt-1 text-sm text-gray-500"> reviews</p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">price</p>
              </div>
            </div>
         
        </div>
      </div>
    </div>
 </>
  )
}

export default Example;
