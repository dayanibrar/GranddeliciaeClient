import SingleCourse from "../../pages/books/[slug]";
import { currencyFormatter } from "../../utils/helpers";
import { Badge, } from "antd";
import ReactPlayer from "react-player";
import { LoadingOutlined, SafetyOutlined } from "@ant-design/icons";
import { OfferComp } from "..";
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import Link from "next/link";
const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Books', href: 'browsebooks' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }
const totaltime = { years: 2, days: 15, }

const authenticity = {
  version: 1,
  sellername: "John B.Hanman",
  reports: 0
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const SingleCourseJumbotron = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
  loading,
  user,
  handlePaidEnrollment,
  handleFreeEnrollment,
  enrolled,
  setEnrolled,
}) => {
  // destructure
  const {
    name,
    description,
    instructor,
    updatedAt,
    lessons,
    image,
    price,
    paid,
    category,
    slug
  } = course;

  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <>

      <div className="">
        <div className="container mx-auto px-10 mb-8 bg-gray-100 rounded-lg">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 col-span-1">
              <div className="mt-5">
                <nav aria-label="Breadcrumb">
                  {/* sm:px-6 lg:max-w-7xl lg:px-8 */}
                  <ol role="list" className="max-w-2xl mx-auto flex items-center space-x-2 ">
                    {product.breadcrumbs.map((breadcrumb) => (
                      <li key={breadcrumb.id}>
                        <div className="flex items-center">
                          <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                            {breadcrumb.name}
                          </a>
                          <svg
                            width={16}
                            height={20}
                            viewBox="0 0 16 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="w-4 h-5 text-gray-300"
                          >
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                          </svg>
                        </div>
                      </li>
                    ))}
                    <li className="text-sm w-100">
                      <Link href={`/books/${slug}`} aria-current="page" className="font-sm w-100 text-gray-500 hover:text-gray-600">
                        {name}
                      </Link>
                    </li>
                  </ol>
                </nav>

                {/* Image gallery */}
                <div className="p-10">
                  <div className="aspect-w-3 aspect-h-4 rounded-lg lg:block">
                    <img
                      src={image.Location}
                      alt={name}
                      className="w-full h-full object-center object-cover rounded-2xl shadow-md"
                    />
                  </div>
                </div>
              </div>

            </div>
            
            <div className="lg:col-span-8 col-span-1">
              <div className="lg:sticky relative col-8">
              <div className="container mx-auto px-10 mb-8 bg-gray-100 rounded-lg">

              <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                  <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
                  </div>

                  {/* Options */}
                  <div className="mt-4 lg:mt-0 lg:row-span-1">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl text-gray-900">
                      {paid
                        ? currencyFormatter({
                          amount: price,
                          currency: "usd",
                        })
                        : "Free"}
                    </p>

                    <form className="mt-10">

                      <button
                        type="submit"
                        className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        icon={<SafetyOutlined />}
                        disabled={loading}
                        onClick={paid ? handlePaidEnrollment : handleFreeEnrollment}
                      >
                        {user ? enrolled.status ? "Go to Book" : "Purchase Book" : "Login to purchase"}
                      </button>
                    </form>
                  </div>

                  <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    {/* Description and details */}
                    <div>
                      <h3 className="sr-only">Description</h3>

                      <div className="space-y-6">
                        {/* Add a base-description or excerpt function so that sellers can have a summarized description on top */}
                        <p className="text-base text-gray-900">{description && description.substring(0, 250)}</p>
                      </div>
                    </div>

                    <div className="mt-10">
                      {/* Add a high-lights function that goes shows an highlight of the book before buying. */}
                      <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                      <div className="mt-4">
                        <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                          {product.highlights.map((highlight) => (
                            <li key={highlight} className="text-gray-400">
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* <div className="mt-10">
                         Add a seller-details function that shows information about the seller
                        <h2 className="text-sm font-medium text-gray-900">Details</h2>

                        <div className="mt-4 space-y-6">
                            <p className="text-sm text-gray-600">{product.details}</p>
                        </div>
                    </div> */}
                  </div>
                </div>

              </div>
               

              </div>
            </div>
          </div>
        </div>


        <div className="container mx-auto px-10 mb-8 bg-gray-100 rounded-lg">

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='lg:col-span-12 col-span-1'>
              <div className="product-info p-5">
                <div className="product-des">
                  <h1 className="font-medium text-2xl mb-3">Product Description</h1>
                  {description && description}
                  <hr className="mt-5 mb-5" />
                  <Badge
                    count={category}
                    style={{ backgroundColor: "#C4C4C4" }}
                    className="pb-4 mr-2"
                  />
                </div>
                <p>Last udpated {new Date(updatedAt).toLocaleDateString()}</p>
                <p className="text-sm text-grey block mt-6 font-bold">Created by {course.instructor.name}</p>

                <div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mb-8 rounded-lg">

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>

            <div className='lg:col-span-4 bg-gray-100 col-span-1 rounded-lg'>
              <div className="product-info p-5 rounded-lg">
                <div className="product-des">
                  <h1 className="font-medium text-2xl mb-3">Authenticity</h1>
                  {/* Add the Authenticity function */}
                  {/* {description && description} */}
                  <p>This product is a seller's {authenticity.version} copy being sold by a third party seller.
                    Originally created by &quot;{authenticity.sellername}&quot;. If you are looking for a
                    1st copy product/version browse over to Search Authenticity page.
                    <br />
                    <hr className="mt-2 mb-3" />
                    <span className="mt-3 mb-2">
                      <b>Reports for this product:</b> {authenticity.reports}
                    </span>
                  </p>
                  <hr className="mt-5 mb-5" />
                  <h3>License: Approved</h3>
                </div>
                <p className="text-stone-400">Contact Xidas Academy copy-right and seller service if anything is wrong.</p>

                <div>
                  <br />
                  <br />
                  <br />

                  <button
                    type="submit"
                    className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit a report
                  </button>
                </div>
              </div>
            </div>

            <div className='lg:col-span-4 bg-gray-100 col-span-1 rounded-lg'>
              <div className="product-info p-5">
                <div className="product-des">
                  <h1 className="font-medium text-2xl mb-3">Seller Information</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting indssustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <hr className="mt-5 mb-5" />
                  <h3 className="mb-3 mt-3">
                    <Badge
                      count={totaltime.years}
                      style={{ backgroundColor: "#C4C4C4" }}
                      className="mr-2"
                    />
                    <span>
                      Year on Book Base
                    </span>
                  </h3>

                </div>
                <p>Seller's Contact Information:</p>
                <p className="text-sm text-grey block mt-6 font-bold">Email: Johndoe@xidasstudios.com</p>
                <div>
                  <br />

                  <button
                    type="submit"
                    className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Contact Seller
                  </button>
                </div>
              </div>
            </div>

            <div className='lg:col-span-4 bg-gray-100 col-span-1 rounded-lg'>
              <div className="product-info p-5">
                <div className="product-des">
                  <h1 className="font-medium text-2xl mb-3">Check Comment by Xidas Academy</h1>
                  <p>This book has been verified and checked throughly for all it's updates. If you find an error, copyright issue,
                    or anything that is wrong with the book while reading, before buying etc, submit a check-report witht the issue.
                  </p>
                  <hr className="mt-5 mb-5" />
                  <Badge
                    count={7}
                    style={{ backgroundColor: "#C4C4C4" }}
                    className="pb-4 mr-2"
                  />
                </div>
                <p>Last checked {new Date(updatedAt).toLocaleDateString()}</p>
                <p className="text-sm text-grey block mt-6 font-bold">Checked by <span>Sarah Lee</span></p>

                <div>
                  <button
                    type="submit"
                    className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit a report
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>

  );
};

export default SingleCourseJumbotron;
