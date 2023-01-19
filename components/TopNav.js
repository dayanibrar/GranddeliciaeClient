import { useState, useEffect, useContext } from "react";
// import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  CoffeeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  CarryOutOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const { Item, SubMenu, ItemGroup } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };

  return (
    // <Menu
    //   theme="light"
    //   mode="horizontal"
    //   selectedKeys={[current]}
    //   className="text-black hover:text-black mb-2 bg-light shadow-sm lg:rounded-lg mt-5 sm:rounded-none md:rounded-none"
    // >
    //   <Item
    //     key="/"
    //     onClick={(e) => setCurrent(e.key)}
    //   >
    //     <Link href="/" className="navtexts">
    //       <a className="text-black hover:text-black">Book Base</a>
    //     </Link>
    //   </Item>

    //   {user && user.role && user.role.includes("Instructor") ? (
    //     <Item
    //       key="/instructor/course/create"
    //       onClick={(e) => setCurrent(e.key)}
    //       icon={<CarryOutOutlined />}
    //     >
    //       <Link href="/instructor/course/create">
    //         <a>Create Course</a>
    //       </Link>
    //     </Item>
    //   ) : (
    //     <Item
    //       key="/user/become-instructor"
    //       onClick={(e) => setCurrent(e.key)}
    //       icon={<TeamOutlined />}
    //     >
    //       <Link href="/user/become-instructor">
    //         <a>Become Instructor</a>
    //       </Link>
    //     </Item>
    //   )}

    //   {user === null && (
    //     <>
    //       <Item
    //         className="float-right"
    //         key="/register"
    //         onClick={(e) => setCurrent(e.key)}
    //         icon={<UserAddOutlined />}
    //       >
    //         <Link href="/register">
    //           <a>Register</a>
    //         </Link>
    //       </Item>

    //       <Item
    //         className="float-right"
    //         key="/login"
    //         onClick={(e) => setCurrent(e.key)}
    //         icon={<LoginOutlined />}
    //       >
    //         <Link href="/login">
    //           <a>Login</a>
    //         </Link>
    //       </Item>
    //     </>
    //   )}

    //   {user !== null && (
    //     <SubMenu
    //       icon={<CoffeeOutlined />}
    //       title={user && user.name}
    //       className="float-right"
    //     >
    //       <ItemGroup>
    //         <Item key="/user">
    //           <Link href="/user">
    //             <a>Dashboard</a>
    //           </Link>
    //         </Item>
    //         <Item onClick={logout}>Logout</Item>
    //       </ItemGroup>
    //     </SubMenu>
    //   )}

    //   {user && user.role && user.role.includes("Instructor") && (
    //     <Item
    //       key="/instructor"
    //       onClick={(e) => setCurrent(e.key)}
    //       icon={<TeamOutlined />}
    //       className="float-right"
    //     >
    //       <Link href="/instructor">
    //         <a>Instructor</a>
    //       </Link>
    //     </Item>
    //   )}
    // </Menu>

    <Disclosure as="nav" className="bg-white shadow mt-5 mb-5 p-3 rounded-lg">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <a
                  key="/"
                  onClick={(e) => setCurrent(e.key)}
                  href="/"
                  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Home
                </a>
                {user && user.role && user.role.includes("Instructor") ? (
                <a
                key="/instructor/course/create"
                  href="/instructor/course/create"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  New Project
                </a>
                ) : (
                  <a
                  key="/user/become-instructor"
                    href="/user/become-instructor"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Become Seller
                  </a>
                )}

{user === null && (
              <>
                <a
                  key="/register"
                  href="/register"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Sign up
                </a>

                <a
                 key="/login"
                  href="/login"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Login
                </a>

              </>
)}

{user && user.role && user.role.includes("Instructor") && (
                <a
                key="/instructor"
                href="/instructor"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Instructor Dashboard
                </a>
)}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="pt-2 pb-4 space-y-1">
            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
            {user && user.role && user.role.includes("Instructor") && (
            <Disclosure.Button
              as="a"
              href="#"
              className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Instructor Dashboard
            </Disclosure.Button>
            )}

{user && user.role && user.role.includes("Instructor") ? (
                <Disclosure.Button
                as="a"
                key="/instructor/course/create"
                  href="/instructor/course/create"
                  className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  New Project
                </Disclosure.Button>
                ) : (
                  <Disclosure.Button
                  as="a"
                  key="/user/become-instructor"
                    href="/instructor/course/create"
                    className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  >
                    Become Seller
                  </Disclosure.Button>
                )}

          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  );
};

export default TopNav;
