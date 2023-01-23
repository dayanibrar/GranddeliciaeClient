import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: AnalyticsOutlinedIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: AnalyticsOutlinedIcon },
  { name: "View All Products", href: "#", icon: AnalyticsOutlinedIcon },
  { name: "Contact Sales", href: "#", icon: AnalyticsOutlinedIcon },
];
const company = [
  { name: "About", href: "#" },
  { name: "Customers", href: "#" },
  { name: "Press", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Privacy", href: "#" },
];
const resources = [
  { name: "Community", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Guides", href: "#" },
  { name: "Webinars", href: "#" },
];
const blogPosts = [
  {
    id: 1,
    name: "Boost your conversion rate",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
  },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="relative bg-black">
      <div
        className="pointer-events-none absolute inset-0 z-30 shadow"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-5 px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
          <div>
            <a href="#" className="flex">
              <span className="sr-only">Your Company</span>
              <img className="h-28" src="/images/granddeliciaelog.png" alt="" />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-white hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset ">
              <span className="sr-only">Open menu</span>
             <MenuOutlinedIcon />
            </Popover.Button>
          </div>

          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10 mx-auto">
            <a
            href="#"
            className="text-base font-medium text-white hover:text-white"
          >
            Home
          </a>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-white" : "text-white",
                        "group inline-flex items-center rounded-md bg-black text-base font-medium hover:text-white focus:outline-none "
                      )}
                    >
                      <span>Premium</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-white" : "text-white",
                          "ml-2 h-5 w-5 group-hover:text-white"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-neutral-900 shadow-lg md:block">
                        <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-neutral-800"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-yellow-500 text-white sm:h-12 sm:w-12">
                                    <item.icon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-base  text-white font-bold">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-md text-gray-100 font-medium">
                                      {item.description}
                                    </p>
                                  </div>
                                  <p className="mt-2 text-sm font-bold text-yellow-500 lg:mt-4">
                                    Learn more
                                    <span aria-hidden="true"> &rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-black">
                          <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-white hover:bg-gray-100 hover:text-black"
                                >
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
             
              <a
                href="#"
                className="text-base font-medium text-white hover:text-white"
              >
                About
              </a>

              <Popover>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-white",
                      "group inline-flex items-center rounded-md bg-black text-base font-medium hover:text-white focus:outline-none "
                    )}
                  >
                    <span>Resorts</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-white" : "text-white",
                        "ml-2 h-5 w-5 group-hover:text-white"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-1"
                  >
                    <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 bg-white" />
                        <div className="w-1/2 bg-gray-50" />
                      </div>
                      <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                        <nav className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                          <div>
                            <h3 className="text-base font-medium text-white">
                              Company
                            </h3>
                            <ul role="list" className="mt-5 space-y-6">
                              {company.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                  >
                                    <span className="ml-4">{item.name}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-base font-medium text-white">
                              Resources
                            </h3>
                            <ul role="list" className="mt-5 space-y-6">
                              {resources.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                  >
                                    <span className="ml-4">{item.name}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </nav>
                        <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                          <div>
                            <h3 className="text-base font-medium text-white">
                              From the blog
                            </h3>
                            <ul role="list" className="mt-6 space-y-6">
                              {blogPosts.map((post) => (
                                <li key={post.id} className="flow-root">
                                  <a
                                    href={post.href}
                                    className="-m-3 flex rounded-lg p-3 hover:bg-gray-100"
                                  >
                                    <div className="hidden flex-shrink-0 sm:block">
                                      <img
                                        className="h-20 w-32 rounded-md object-cover"
                                        src={post.imageUrl}
                                        alt=""
                                      />
                                    </div>
                                    <div className="w-0 flex-1 sm:ml-8">
                                      <h4 className="truncate text-base font-medium text-gray-900">
                                        {post.name}
                                      </h4>
                                      <p className="mt-1 text-sm text-white">
                                        {post.preview}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-6 text-sm font-medium">
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-500"
                            >
                              View all posts
                              <span aria-hidden="true"> &rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

              

              <a
              href="#"
              className="text-base font-medium text-white hover:text-white"
            >
              Contact
            </a>

             

              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-white" : "text-white",
                        "group inline-flex items-center rounded-md bg-black text-base font-medium hover:text-white focus:outline-none "
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-white" : "text-white",
                          "ml-2 h-5 w-5 group-hover:text-white"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-neutral-900 shadow-lg md:block">
                        <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-neutral-800"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-yellow-500 text-white sm:h-12 sm:w-12">
                                    <item.icon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-base  text-white font-bold">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-md text-gray-100 font-medium">
                                      {item.description}
                                    </p>
                                  </div>
                                  <p className="mt-2 text-sm font-bold text-yellow-500 lg:mt-4">
                                    Learn more
                                    <span aria-hidden="true"> &rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-black">
                          <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-white hover:bg-gray-100 hover:text-black"
                                >
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>


            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <a
                href="#"
                className="text-base font-medium text-white rounded-sm border px-4 py-2 border-white hover:text-white"
              >
                Book Now
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center rounded-sm border border-white bg-black px-4 py-2 text-base font-medium text-white hover:text-white shadow-sm hover:bg-black"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-black border-black border-solid border rounded-lg bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/images/granddeliciaelogo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-white hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset ">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="ml-4 text-base font-medium text-gray-50">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 text-base">
                    <a
                      href="#"
                      className="font-medium text-yellow-600 hover:text-yellow-500"
                    >
                      View all products
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-gray-50 hover:text-gray-200"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-gray-50 hover:text-gray-200"
                >
                  Docs
                </a>
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-gray-50 hover:text-gray-200"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-gray-50 hover:text-gray-200"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-gray-50 hover:text-gray-200"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-gray-50 hover:text-gray-200"
                >
                  Contact Sales
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-white">
                  Existing customer?{" "}
                  <a href="#" className="text-yellow-600 hover:text-yellow-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
