import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, Tooltip } from "antd";
// import Link from "next/link";
import { InstructorBookcard } from "../../components";
// import NoProducts from "../../components/user/noProducts";
// import NoProjectCard from "../../components/becomeseller/NoProjectCard";
// import { Fragment } from 'react'
// import { Dialog, Menu, Transition } from '@headlessui/react'
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// import CancelIcon from '@mui/icons-material/Cancel';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import { useContext } from "react";
import { Context } from "../../context";
import { stripeCurrencyFormatter } from "../../utils/helpers";
import UserRoute from "../../components/routes/UserRoute";
import InstructorRoute from "../../components/routes/InstructorRoute"
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BarsArrowUpIcon,
  CheckBadgeIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import {
  Bars3CenterLeftIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
];
const projects = [
  {
    name: "Workcation",
    href: "#",
    siteHref: "#",
    repoHref: "#",
    repo: "debbielewis/workcation",
    tech: "Laravel",
    lastDeploy: "3h ago",
    location: "United states",
    starred: true,
    active: true,
  },
  // More projects...
];
const activityItems = [
  {
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },
  {
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },
  {
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },
  {
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },
  {
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },
  {
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },
  {
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },
  {
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },

  // More items...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const secondaryNavigation = [
  { name: "Settings", href: "#" },
  { name: "Help", href: "#" },
  { name: "Privacy", href: "#" },
];
const thirdNavigation = [
  { name: "Documents", href: "#" },
  { name: "Planning", href: "#" },
  { name: "Manage Products", href: "#" },
  { name: "Customer Support", href: "#" },
  { name: "Inbox", href: "#" },
];

const cards = [
  { name: "Account balance", href: "#" },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  // More transactions...
];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

const InstructorIndex = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get("/api/instructor-courses");
    setCourses(data);
  };

  const myStyle = { marginTop: "-15px", fontSize: "10px" };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [balance, setBalance] = useState({ pending: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sendBalanceRequest();
  }, []);

  const sendBalanceRequest = async () => {
    const { data } = await axios.get("/api/instructor/balance");
    setBalance(data);
  };

  const handlePayoutSettings = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/instructor/payout-settings");
      window.location.href = data;
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert("Unable to access payout settings. Try later.");
    }
  };

  const { state, dispatch } = useContext(Context);

  const { user } = state;

  var data = [
      [0, 4, "Good night"],
      [5, 11, "Good morning"], //Store messages in an array
      [12, 17, "Good afternoon"],
      [18, 24, "Good night"],
    ],
    hr = new Date().getHours();

  return (
    <>
      <InstructorRoute>
        <div
          className="fixed top-0 left-0 h-full w-1/2 bg-neutral-100"
          aria-hidden="true"
        />
        <div
          className="fixed top-0 right-0 h-full w-1/2 bg-gray-50"
          aria-hidden="true"
        />
        <div className="relative flex min-h-full flex-col">
          {/* Navbar */}
          <Disclosure as="nav" className="flex-shrink-0 bg-black">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between">
                    {/* Logo section */}
                    <div className="flex items-center px-2 lg:px-0 xl:w-64">
                      <div className="flex-shrink-0">
                        <img
                          className="h-16 w-auto"
                          src="/images/granddeliciaelogo.png"
                          alt="The Grand Deliciae"
                        />
                      </div>
                    </div>

                    {/* Search section */}
                    <div className="flex flex-1 justify-center lg:justify-end">
                      <div className="w-full px-2 lg:px-6">
                        <div className="relative text-yellow-50 focus-within:text-gray-400">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <UserCircleIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="block w-full rounded-md border border-transparent bg-yellow-500 bg-opacity-50 py-2 pl-10 pr-3 leading-5 text-yellow-100 placeholder-yellow-200 focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm">
                            <p> Welcome back {user && user.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-yellow-600 p-2 text-yellow-400 hover:bg-yellow-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-600">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3CenterLeftIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    {/* Links section */}
                    <div className="hidden lg:block lg:w-80">
                      <div className="flex items-center justify-end">

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-4 flex-shrink-0">
                          <div>
                         
                              <span className="sr-only">Open user menu</span>
                              <div className="h-8 w-8 rounded-full">
                                <a
                                  href="/user/"
                                  className="lg:ml-8 md:ml-2 sm:ml-2 inline-flex items-center justify-center rounded-sm border border-white bg-black px-4 py-2 text-base font-medium text-white hover:text-white shadow-sm hover:bg-black"
                                >
                                  {user &&
                                    user.firstname.substring(0, 1) +
                                      user.lastname.substring(0, 1)}
                                </a>
                              </div>

                          </div>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-white bg-yellow-800"
                            : "text-yellow-200 hover:text-yellow-100 hover:bg-yellow-600",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="border-t border-yellow-800 pt-4 pb-3">
                    <div className="space-y-1 px-2">
                   
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* 3 column wrapper */}
          <div className="mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8">
            {/* Left sidebar & main wrapper */}
            <div className="min-w-0 flex-1 bg-neutral-100 xl:flex">
              {/* Account profile */}
              <div className="bg-neutral-100 xl:w-64 xl:flex-shrink-0 xl:border-r xl:border-gray-200">
                <div className="py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-8">
                      <div className="space-y-8 sm:flex sm:items-center sm:justify-between sm:space-y-0 xl:block xl:space-y-8">
                        {/* Profile */}
                        <div className="flex items-center space-x-3">
                          <div className="h-12 w-100 flex-shrink-0">
                          <p
                                  className=" md:ml-2 sm:ml-2 inline-flex items-center justify-center rounded-sm border border-white bg-neutral-200 px-4 py-2 text-base font-medium text-black hover:text-white shadow-sm hover:bg-black"
                                >
                                  {user &&
                                    user.firstname + " " +
                                      user.lastname} <br /> 

                                     
                                </p>
                          </div>
                          {/* <div className="space-y-1">
                            
                              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                {user && user.name}
                              </span>
                          </div> */}
                        </div>
                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row xl:flex-col">
                          <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 xl:w-full"
                          >
                            New Project
                          </button>
                          <button
                            type="button"
                            className="mt-3 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full"
                          >
                            Contact Support
                          </button>
                        </div>
                      </div>
                      {/* Meta info */}
                      <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                        <div className="flex items-center space-x-2">
                          <CheckBadgeIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-medium text-gray-500">
                           Account verified
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RectangleStackIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          {/* Add number of services listed here */}
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects List */}
              <div className="bg-neutral-100  lg:min-w-0 lg:flex-1">
                <div className="border-b border-t border-neutral-900 pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6">
                  <div className="flex items-center">
                    <h1 className="flex-1 text-lg font-medium">Services</h1>
                  </div>
                </div>
                <ul
                  role="list"
                  className="divide-y divide-gray-200 h-96 border-b border-gray-200"
                >
                  {courses &&
          courses.map((course) => (
                    <li
                      key={course._id}
                      className="relative py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
                    >
                      <div className="flex items-center justify-between space-x-4">
                        {/* Repo name and link */}
                        <div className="min-w-0 space-y-3">
                          <div className="flex items-center space-x-3">
                            
                            <span
                              className={classNames(
                                course.published ? "bg-green-100" : "bg-gray-100",
                                "h-4 w-4 rounded-full flex items-center justify-center"
                              )}
                              aria-hidden="true"
                            >
                              <span
                                className={classNames(
                                  course.published
                                    ? "bg-green-400"
                                    : "bg-red-400",
                                  "h-2 w-2 rounded-full"
                                )}
                              />
                            </span>

                            <h2 className="text-sm font-medium">
                              <p href="/">
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                />
                               {course.name}
                                <span className="sr-only">
                                {course.published ? (<><p>Published</p></>):(<>Not Published</>)}
                                </span>
                              </p>
                            </h2>
                          </div>
                          <div
                           
                            className="group relative flex items-center space-x-2.5"
                          >
                            <img
                              className="h-16 w-50 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              viewBox="0 0 18 18"
                              src={
                                course.image ? course.image.Location : "/course.png"
                              }
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <div className="sm:hidden">
                          <ChevronRightIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        {/* Repo meta info */}
                        <div className="hidden flex-shrink-0 flex-col items-end space-y-3 sm:flex">
                          <p className="flex items-center space-x-4">
                            <a
                              href={`/instructor/course/view/${course.slug}`}
                              className="relative text-sm font-bold text-gray-500 hover:text-gray-900"
                            >
                              View Service
                            </a>
                            {/* Add total customers here */}
                            {/* <button
                              type="button"
                              className="relative rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                            >
                              <span className="sr-only">
                                {project.starred
                                  ? "Add to favorites"
                                  : "Remove from favorites"}
                              </span>
                              <StarIcon
                                className={classNames(
                                  project.starred
                                    ? "text-yellow-300 hover:text-yellow-400"
                                    : "text-gray-300 hover:text-gray-400",
                                  "h-5 w-5"
                                )}
                                aria-hidden="true"
                              />
                            </button> */}
                          </p>
                          <p className="flex space-x-2 text-sm text-gray-500">
                            <span aria-hidden="true">&middot;</span>
                            <span>{course.category}</span>
                            <span aria-hidden="true">&middot;</span>
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Activity feed */}
            <div className="bg-gray-50 pr-4 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
              <div className="pl-6 lg:w-80">
                <div className="pt-6 pb-2">
                  <h2 className="text-sm font-semibold">Activity</h2>
                </div>
                <div>
                  {/* <ul role="list" className="divide-y divide-gray-200">
                    {activityItems.map((item) => (
                      <li key={item.commit} className="py-4">
                        <div className="flex space-x-3">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium">You</h3>
                              <p className="text-sm text-gray-500">
                                {item.time}
                              </p>
                            </div>
                            <p className="text-sm text-gray-500">
                              Deployed {item.project} ({item.commit} in master)
                              to {item.environment}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul> */}
                  <div className="border-t border-gray-200 py-4 text-sm">
                    <a
                      href="#"
                      className="font-semibold text-yellow-600 hover:text-yellow-900"
                    >
                      View all activity
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <h1 className="jumbotron text-center square">Instructor Dashboard</h1>
      <div className="container mx-auto px-10 mb-8">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          <InstructorBookcard />
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative col-8'>
            </div>
          </div>
        </div>
      </div>       
     

      {courses &&
        courses.map((course) => (
          <>
            <div className="media pt-2">
              <Avatar
                size={80}
                src={course.image ? course.image.Location : "/course.png"}
              />

              <div className="media-body pl-2">
                <div className="row">
                  <div className="col">
                    <Link
                      href={`/instructor/course/view/${course.slug}`}
                      className="pointer"
                    >
                      <a className="mt-2 text-primary">
                        <h5 className="pt-2">{course.name}</h5>
                      </a>
                    </Link>
                    <p style={{ marginTop: "-10px" }}>
                      {course.lessons.length} Lessons
                    </p>

                    {course.lessons.length < 5 ? (
                      <p style={myStyle} className="text-warning">
                        At least 5 lessons are required to publish a course
                      </p>
                    ) : course.published ? (
                      <p style={myStyle} className="text-success">
                        Your course is live in the marketplace
                      </p>
                    ) : (
                      <p style={myStyle} className="text-success">
                        Your course is ready to be published
                      </p>
                    )}
                  </div>

                  <div className="col-md-3 mt-3 text-center">
                    {course.published ? (
                      <Tooltip title="Published">
                        <CheckCircleOutlined className="h5 pointer text-success" />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Unpublished">
                        <CloseCircleOutlined className="h5 pointer text-warning" />
                      </Tooltip>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>

          
        ))} */}
      </InstructorRoute>
    </>
  );
};

export default InstructorIndex;
