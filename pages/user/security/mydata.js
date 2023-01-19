import React from "react";
import {useState, useEffect, useContext, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  BellIcon,
  BriefcaseIcon,
  ChatIcon,
  CogIcon,
  DocumentSearchIcon,
  HomeIcon,
  MenuAlt2Icon,
  QuestionMarkCircleIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import { Context } from "../../../context";
import { useRouter } from "next/router";
import Head from "next/head";
import UserRoute from "../../../components/routes/UserRoute";
import { SyncOutlined } from "@ant-design/icons";
import moment from 'moment';
import LogoutModal from "../../../components/security/logoutmodal";
import { ExclamationIcon } from '@heroicons/react/outline'

const navigation = [
  { name: "My Profile", href: "/user", icon: HomeIcon, current: false },
  { name: "Security", href: "/user/security/security", icon: BriefcaseIcon, current: false },
  { name: "My Data", href: "/user/security/mydata", icon: DocumentSearchIcon, current: true },
  { name: "Privacy", href: "/user/privacy/privacy", icon: ChatIcon, current: false },
  { name: "Settings", href: "/user/settings", icon: CogIcon, current: false },
];
const secondaryNavigation = [
  { name: "Help", href: "/user/help/index", icon: QuestionMarkCircleIcon },
  { name: "Logout", href: "/user/logout", icon: CogIcon },
];
const tabs = [
  { name: "General", href: "#", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const mydatasettings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] =
    useState(false);

    const { state, dispatch } = useContext(Context);
    const { user } = state;
  
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const datezone = new Date();
const dateAsString = datezone.toString();
const timezone = dateAsString.match(/\(([^\)]+)\)$/)[1];

const [open, setOpen] = useState(false)

const cancelButtonRef = useRef(null)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <UserRoute>
        {loading && (
          <SyncOutlined
            spin
            className="d-flex justify-content-center display-1 text-danger p-5"
          />
        )}

        <Head>
          <title>BookBase: {user && user.name} My Data</title>

          <meta name="description" content="Settings page" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:title" content="Settings" key="title" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <div>
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-40 flex md:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-14 p-1">
                      <button
                        type="button"
                        className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:bg-gray-600"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Close sidebar</span>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 px-4 flex items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/easywire-logo-purple-600-mark-gray-900-text.svg"
                      alt="Easywire"
                    />
                  </div>
                  <div className="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav className="h-full flex flex-col">
                      <div className="space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-purple-50 border-purple-600 text-purple-600"
                                : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group border-l-4 py-2 px-3 flex items-center text-base font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-purple-500"
                                  : "text-gray-400 group-hover:text-gray-500",
                                "mr-4 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="mt-auto pt-10 space-y-1">
                        {secondaryNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="group border-l-4 border-transparent py-2 px-3 flex items-center text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                          >
                            <item.icon
                              className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <nav className="bg-gray-50 border-r border-gray-200 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto">
              <div className="flex-shrink-0 px-4 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/easywire-logo-purple-600-mark-gray-900-text.svg"
                  alt="Easywire"
                />
              </div>
              <div className="flex-grow mt-5">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-purple-50 border-purple-600 text-purple-600"
                          : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                        "group border-l-4 py-2 px-3 flex items-center text-sm font-medium"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-purple-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 block w-full">
                {secondaryNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group border-l-4 border-transparent py-2 px-3 flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    <item.icon
                      className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          {/* Content area */}
          <div className="md:pl-64">
            <div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
              <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white flex">
                <button
                  type="button"
                  className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 md:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <main className="flex-1">
                <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
                  <div className="pb-16">
                    <div className="px-4 sm:px-6 md:px-0">
                      <h1 className="text-3xl font-extrabold text-gray-900">
                        Settings: Security
                      </h1>
                    </div>
                    <div className="px-4 sm:px-6 md:px-0">
                      <div className="py-6">
                        {/* Tabs */}
                        <div className="lg:hidden">
                          <label htmlFor="selected-tab" className="sr-only">
                            Select a tab
                          </label>
                          <select
                            id="selected-tab"
                            name="selected-tab"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                            defaultValue={tabs.find((tab) => tab.current).name}
                          >
                            {tabs.map((tab) => (
                              <option key={tab.name}>{tab.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="hidden lg:block">
                          <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8">
                              {tabs.map((tab) => (
                                <a
                                  key={tab.name}
                                  href={tab.href}
                                  className={classNames(
                                    tab.current
                                      ? "border-purple-500 text-purple-600"
                                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                                  )}
                                >
                                  {tab.name}
                                </a>
                              ))}
                            </nav>
                          </div>
                        </div>

                        {/* Description list with inline editing */}
                        <div className="mt-10 divide-y divide-gray-200">
                          <div className="space-y-1">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                              Profile
                            </h3>
                            <p className="max-w-2xl text-sm text-gray-500">
                             This information will be only avaliable to you. Unlike your name this is private and wont be accessed by anyone except you.
                             We wont share your information or sell it to any third party.
                            </p>
                          </div>
                          <div className="mt-6">
                              
                            <dl className="divide-y divide-gray-200">

                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                <dt className="text-sm font-medium text-gray-500">
                                  First Name
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <span className="flex-grow">
                                   {user && user.firstname}
                                  </span>
                                </dd>
                              </div>

                              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                <dt className="text-sm font-medium text-gray-500">
                                  Last Name
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <span className="flex-grow">
                                   {user && user.lastname}
                                  </span>
                                </dd>
                              </div>

                              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                <dt className="text-sm font-medium text-gray-500">
                                  Username
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <span className="flex-grow">
                                   {user && user.name}
                                  </span>
                                </dd>
                              </div>

                              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500">
                                  Your payment methods
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <span className="flex-grow">
                                   Xidas Studios works wirh Stripe, for your payment method and history please contact our customer services.
                                  </span>
                              
                                </dd>
                              </div>
                              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                <dt className="text-sm font-medium text-gray-500">
                                  Email
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <span className="flex-grow">
                                   {user && user.email}
                                  </span>
                                </dd>
                              </div>
                              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                                <dt className="text-sm font-medium text-gray-500">
                                 Your Location
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <span className="flex-grow">
                                  Not avaliable
                                  </span>
                                 
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div className="mt-10 divide-y divide-gray-200">
                          <div className="space-y-1">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                              Purchase History
                            </h3>
                            <p className="max-w-2xl text-sm text-gray-500">
                              Information on what you purchase or sell
                            </p>
                          </div>
                          <div className="mt-6">
                            <dl className="divide-y divide-gray-200">
                              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500">
                                  My Products
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <span className="flex-grow">Private</span>
                                  <span className="ml-4 flex-shrink-0">
                                    <button
                                      type="button"
                                      className="bg-white rounded-md hover:bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    >
                                     {user && user.courses.length}
                                    </button>
                                  </span>
                                </dd>
                              </div>
                              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                <dt className="text-sm font-medium text-gray-500">
                               My role
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <span className="flex-grow">Private</span>
                                  <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                    <span
                                      type="button"
                                      className="bg-white hover:bg-white cursor-default rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    >
                                     {user && user.role}
                                    </span>
                                   
                                  </span>
                                </dd>
                              </div>
                              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                <dt className="text-sm font-medium text-gray-500">
                               Created at
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <span className="flex-grow">Private</span>
                                  <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                    <span
                                      type="button"
                                      className="bg-white hover:bg-white cursor-default rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    >
                                        {/* moment().format('MMMM Do YYYY, h:mm:ss a');*/}
                                     {moment(user && user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                                    </span>
                                   
                                  </span>
                                </dd>
                              </div>

                              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                <dt className="text-sm font-medium text-gray-500">
                              Time zone
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <span className="flex-grow">Private</span>
                                  <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                    <span
                                      type="button"
                                      className="bg-white hover:bg-white cursor-default rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    >
                                        {/* moment().format('MMMM Do YYYY, h:mm:ss a');*/}
                                    {timezone}
                                    </span>
                                   
                                  </span>
                                </dd>
                              </div>
                             
                             
                              
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </UserRoute>
    </>
  );
};

export default mydatasettings;
