import {useState, useEffect, useContext } from "react";
import UserRoute from "../../components/routes/UserRoute";
import { SyncOutlined } from "@ant-design/icons";
import { Bookscard } from "../../components";
import Head from "next/head";
import { Fragment } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
  UserIcon,
  UserCircleIcon,
  CogIcon
} from '@heroicons/react/outline'
import { Context } from "../../context";
import { useRouter } from "next/router";
import NoProducts from "../../components/user/noProducts";
import { DocumentAddIcon } from "@heroicons/react/outline";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const navigation = [
  { name: 'Dashboard', href: '#', icon: UserIcon, current: true },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentAddIcon, current: false },
  { name: 'Settings', href: '/user/settings', icon: CogIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const UserIndex = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [loading, setLoading] = useState(false);

  // const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


  return (
    <UserRoute>
      {loading && (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-danger p-5"
        />
      )}

      <Head>
        <title>User Profile Book Base</title>
        {/* Meta Tags */}
        <meta
          name="description"
          content="News and Blogs from Xidas Studios on latest and upcoming technologies, projects, services and more. Keep yourself updated on our page."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Xidas Studios Press and Blogs"
          key="title"
        />
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

      {/* Dashboard */}

      <div>
        <>
          <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 flex z-40 md:hidden"
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
                  <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                          type="button"
                          className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 flex items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                        alt="Workflow"
                      />
                    </div>
                    {/* Navigation panel starts */}
                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                      <nav className="px-2 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-indigo-800 text-white"
                                : "text-indigo-100 hover:bg-indigo-600",
                              "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                            )}
                          >
                            <item.icon
                              className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
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
              <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="mt-5 flex-1 flex flex-col">
                  <nav className="flex-1 px-2 pb-4 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-indigo-800 text-white hover:text-white"
                            : "text-indigo-100 hover:bg-indigo-600 hover:text-white",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}

                    {user && user.role && user.role.includes("Instructor") && (
                      <a
                        key="/instructor"
                        href="/instructor"
                        className={classNames(
                          // 'text-indigo-100 hover:bg-indigo-600'
                          "group text-white flex items-center px-2 py-2 text-sm font-medium rounded-md text-indigo-100 hover:bg-indigo-600 hover:text-white"
                        )}
                      >
                        <HomeIcon
                          className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                          aria-hidden="true"
                        />
                        Instructor Dashboard
                      </a>
                    )}
                  </nav>
                  <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
                    <a href="#" className="flex-shrink-0 group block">
                      <div className="flex items-center">
                        <div>
                          <Stack direction="row" spacing={2}>
                            <StyledBadge
                              overlap="circular"
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                              }}
                              variant="dot"
                            >
                              <Avatar
                                alt={user && user.name}
                               
                              >
                           {user && user.firstname.slice(0,1) + user.lastname.slice(0,1)}
                                </Avatar>
                            </StyledBadge>
                          </Stack>
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">
                            {user && user.name}
                          </p>
                          <p className="text-sm cursor-default font-medium text-indigo-200 group-hover:text-white">
                          Current date is {date}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:pl-64 flex flex-col flex-1">
              <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                <button
                  type="button"
                  className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex-1 px-4 flex justify-between">
                  <div className="flex-1 flex">
                    {/* <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                      placeholder="Search"
                      type="search"
                      name="search"
                    />
                  </div>
                </form> */}
                  </div>
                  <div className="ml-4 flex items-center md:ml-6">
                    <a href="/">
                      <button
                        type="button"
                        className="bg-white p-1 rounded-full text-gray-400 hover:bg-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="sr-only">Home</span>
                        <HomeIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <main>
                <div className="py-6">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    {/* <h2 className="text-2xl font-semibold text-gray-900">Welcome to your dashboard {user.firstname} {user.lastname}</h2> */}
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Welcome to your dashboard {user && user.name}
                    </h2>
                    <hr className="mt-3 mb-3 rounded-lg" />
                  </div>
                  <div className="">
                    {/* Replace with your content */}

                    <div className="py-4">
                      <div className="">
                        <div className="">
                          <div className="">
                            <div className="bg-white">
                              <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
                                <div className="-mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                                  {user && user.courses.length > 1 && (
                                    <Bookscard />
                                  )}
                                  {/* <Bookscard /> */}
                                </div>
                                <div className="-mx-px grid grid-cols-1 sm:mx-0 md:grid-cols-2 lg:grid-cols-1">
                                  {user && user.courses.length < 0 && (
                                    <NoProducts className="content-center" />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                </div> */}
                    </div>

                    {/* /End replace */}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </>
      </div>

      {/* <div className="container mx-auto px-10 mb-8">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
           
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative col-8'>
           
            </div>
          </div>
        </div>
      </div> */}
    </UserRoute>
  );
};

export default UserIndex;
