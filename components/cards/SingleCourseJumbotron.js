import SingleCourse from "../../pages/services/[slug]";
import { currencyFormatter } from "../../utils/helpers";
import { Badge } from "antd";
import ReactPlayer from "react-player";
import { SafetyOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import axios from "axios";
import { Avatar, Tooltip, Button, Modal, List } from "antd";
import {
  EditOutlined,
  CheckOutlined,
  UploadOutlined,
  QuestionOutlined,
  CloseOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";
import Item from "antd/lib/list/Item";
import { RadioGroup,Disclosure, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useRouter } from "next/router";
import { useEffect } from "react";



const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "User Dashboard", href: "/user/", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Description and Content",
    },
    // More sections...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import Link from "next/link";


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
    slug,
  } = course;
  

  return (
    <>
    <div className="contianer-fluid">
    <div className="min-h-full">
        <div className="bg-black pb-32">
          <Disclosure as="nav" className="bg-black">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="border-b border-neutral-800">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-12 w-auto"
                            src="/images/granddeliciaelog.png"
                            alt="The Grand Deliciae"
                          />
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? 'bg-neutral-900 text-white hover:text-white '
                                    : 'text-gray-50 hover:bg-gray-700 hover:text-white',
                                  'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          

                          {/* Profile dropdown */}
                         
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="border-b border-neutral-900 md:hidden">
                  <div className="space-y-1 px-2 py-3 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                 
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">Experience unparalleled luxury at our 7-star resort</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              <div className="h-126 rounded-lg border-4 border-dashed border-gray-200">
              {course && (
                    <div className="bg-white">
                      <div className="mx-auto max-w-2xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                          {/* Image gallery */}
                          <Tab.Group as="div" className="flex flex-col-reverse">
                            {/* Image selector */}

                            <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                              <Tab.Panel>
                                <img
                                  src={
                                    course.image
                                      ? course.image.Location
                                      : "/course.png"
                                  }
                                  alt={course.name}
                                  className="h-full w-full object-cover object-center sm:rounded-lg"
                                />
                              </Tab.Panel>
                            </Tab.Panels>
                          </Tab.Group>

                          {/* Product info */}
                          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                             {name}
                            </h1>

                            <div className="mt-2">
                              <h2 className="sr-only">Product information</h2>
                              <p className="text-3xl tracking-tight text-gray-900">
                              {paid
                          ? currencyFormatter({
                              amount: price,
                              currency: "usd",
                            })
                          : "Free"}
                              </p>
                            </div>

                            <div className="mt-3">
                              <h3 className="sr-only">Description</h3>
                              <p className="font-bold font-lg mt-2 mb-2">
                                {category} --{" "}
                                Last udpated {new Date(updatedAt).toLocaleDateString()} --   {course &&
                                              course.lessons &&
                                              course.lessons.length}{" " + "Guides"} 
                              </p>
                              <hr />
                              <p className="mt-2">
                              {description && description.substring(0, 500)}
                              </p>

                            </div>

                            <form className="mt-6">
                              <div className="sm:flex-col1 mt-10 flex">

                                <div className="row">
                                  <Button
                                     type="submit"
                                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-yellow-600 hover:border-yellow-600 hover:text-white py-3 px-8 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                    size="large"
                                    disabled={loading}
                                    onClick={
                                      paid ? handlePaidEnrollment : handleFreeEnrollment
                                    }
                                  >
                                    {user
                            ? enrolled.status
                              ? "Go to your booking"
                              : "Book Now"
                            : "Login to Book"}
                                  </Button>
                                </div>

                              </div>
                            </form>
                          </div>
                        </div>
                        <section
                          aria-labelledby="details-heading"
                          className="mt-12"
                        >
                          <h2 id="details-heading" className="sr-only">
                            Additional details
                          </h2>

                          <div className="divide-y divide-gray-200 border-t mt-5">
                            {product.details.map((detail) => (
                              <Disclosure as="div" key={detail.name}>
                                {({ open }) => (
                                  <>
                                    <h3>
                                      <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                        <span
                                          className={classNames(
                                            open
                                              ? "text-yellow-600 font-bold text-lg"
                                              : "text-gray-900",
                                            "text-lg font-medium"
                                          )}
                                        >
                                          {detail.name}
                                        </span>
                                        <span className="ml-6 flex items-center">
                                          {open ? (
                                            <MinusIcon
                                              className="block h-6 w-6 text-yellow-400 group-hover:text-yellow-500"
                                              aria-hidden="true"
                                            />
                                          ) : (
                                            <PlusIcon
                                              className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                              aria-hidden="true"
                                            />
                                          )}
                                        </span>
                                      </Disclosure.Button>
                                    </h3>
                                    <Disclosure.Panel
                                      as="div"
                                      className="prose prose-sm pb-6"
                                    >
                                      <p>
                                        <ul>
                                          <div
                                            className="space-y-6 text-base text-gray-700"
                                            dangerouslySetInnerHTML={{
                                              __html: course.description,
                                            }}
                                          />
                                        </ul>
                                       
                                      </p>
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            ))}
                          </div>
                        </section>
                      </div>
                    </div>
                  
                  )}
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </div>
      
    </>
  );
};

export default SingleCourseJumbotron;
