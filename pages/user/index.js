import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";
import Link from "next/link";
import { SyncOutlined, PlayCircleOutlined } from "@ant-design/icons";
import Head from "next/head";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import NoProducts from "../../components/user/noProducts";
import { styled } from "@mui/material/styles";
// MUI Components
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// Icons
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { toast } from "react-toastify";
import LogoutIcon from '@mui/icons-material/Logout';

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const navigation = [
  { name: "Dashboard", href: "#", icon: AccountBoxIcon, current: true },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserIndex = () => {
  const {
    state: { user },
  } = useContext(Context);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/user-courses");
      setCourses(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const router = useRouter();

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast.warning(data.message);
    router.push("/login");
  };

  return (
    <UserRoute>
      {loading && (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-danger p-5"
        />
      )}

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
                          <CloseIcon
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
                                ? "bg-yellow-800 text-white"
                                : "text-indigo-100 hover:bg-yellow-600",
                              "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                            )}
                          >
                            <item.icon
                              className="mr-4 flex-shrink-0 h-6 w-6 text-gray-50"
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
              <div className="flex flex-col flex-grow pt-5 bg-gray-900 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img
                    className="h-16 rounded-lg w-auto"
                    src="/images/granddeliciaelogo.png"
                    alt="The Grand Deliciae"
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
                            ? "bg-gray-800 text-white hover:text-white"
                            : "text-gray-100 hover:bg-gray-600 hover:text-white",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className="mr-3 flex-shrink-0 h-6 w-6 text-gray-300"
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
                          "group text-white flex items-center px-2 py-2 text-sm font-medium rounded-md  hover:bg-gray-600 hover:text-white"
                        )}
                      >
                        <HomeIcon
                          className="mr-3 flex-shrink-0 h-6 w-6 text-gray-300"
                          aria-hidden="true"
                        />
                        Admin Dashboard
                      </a>
                    )}

<button
                  type="button"
                  className="group text-white flex items-center px-2 py-2 text-sm font-medium rounded-md  hover:bg-gray-600 hover:text-white"
                  onClick={logout}
                >
                  Continue
                  <LogoutIcon className="mr-3 flex-shrink-0 h-6 w-6 text-gray-300"
                          aria-hidden="true"
                        />
                </button>
                  </nav>
                  <div className="flex-shrink-0 flex border-t border-gray-800 p-4">
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
                              <Avatar alt={user && user.name}>
                                {user &&
                                  user.firstname.slice(0, 1) +
                                    user.lastname.slice(0, 1)}
                              </Avatar>
                            </StyledBadge>
                          </Stack>
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">
                            {user && user.name}
                          </p>
                         
                          <p className="text-sm cursor-default font-medium text-gray-200 group-hover:text-white">
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
                  className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 md:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
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
                                  <ul
                                    role="list"
                                    className="divide-y divide-gray-200 border-b border-gray-200 w-full"
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
                                                    course.published
                                                      ? "bg-green-100"
                                                      : "bg-gray-100",
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
                                                      {course.published ? (
                                                        <>
                                                          <p>Published</p>
                                                        </>
                                                      ) : (
                                                        <>Not Published</>
                                                      )}
                                                    </span>
                                                  </p>
                                                </h2>
                                              </div>
                                              <div className="group relative flex items-center space-x-2.5">
                                                <img
                                                  className="h-16 w-50 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                  viewBox="0 0 18 18"
                                                  src={
                                                    course.image
                                                      ? course.image.Location
                                                      : "/course.png"
                                                  }
                                                  aria-hidden="true"
                                                />
                                              </div>
                                            </div>
                                            <div className="sm:hidden">
                                             
                                            </div>
                                            {/* Repo meta info */}
                                            <div className="hidden flex-shrink-0 flex-col items-end space-y-3 sm:flex">
                                              <p className="flex items-center space-x-4">
                                                <a
                                                  href={`/user/course/${course.slug}`}
                                                  className="relative text-sm font-bold text-gray-500 hover:text-gray-900"
                                                >
                                                  View Service
                                                </a>
                                                {/* Add total customers here */}
                                                {/* <button
                              type="button"
                              className="relative rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
                                                <span aria-hidden="true">
                                                  &middot;
                                                </span>
                                                <span>{course.category}</span>
                                                <span aria-hidden="true">
                                                  &middot;
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                        </li>
                                      ))}
                                  </ul>

                                  {/* {courses &&
                                    courses.map((course) => (
                                      <div
                                        key={course._id}
                                        className="media pt-2 pb-1"
                                      >
                                        <Avatar
                                          size={80}
                                          shape="square"
                                          src={
                                            course.image
                                              ? course.image.Location
                                              : "/course.png"
                                          }
                                        />

                                        <div className="media-body pl-2">
                                          <div className="row">
                                            <div className="col">
                                              <Link
                                                href={`/user/course/${course.slug}`}
                                                className="pointer"
                                              >
                                                <a>
                                                  <h5 className="mt-2 text-primary">
                                                    {course.name}
                                                  </h5>
                                                </a>
                                              </Link>
                                              <p style={{ marginTop: "-10px" }}>
                                                {course.lessons.length} lessons
                                              </p>
                                              <p
                                                className="text-muted"
                                                style={{
                                                  marginTop: "-15px",
                                                  fontSize: "12px",
                                                }}
                                              >
                                                By {course.instructor.name}
                                              </p>
                                            </div>
                                            <div className="col-md-3 mt-3 text-center">
                                              <Link
                                                href={`/user/course/${course.slug}`}
                                              >
                                                <a>
                                                  <PlayCircleOutlined className="h2 pointer text-primary" />
                                                </a>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))} */}
                                  {/* <Bookscard /> */}
                                </div>
                                <div className="-mx-px grid grid-cols-1 sm:mx-0 md:grid-cols-2 lg:grid-cols-1">
                                  {/* {user && user.courses.length < 0 && (
                                    <NoProducts className="content-center" />
                                  )} */}
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
    </UserRoute>
  );
};

export default UserIndex;
