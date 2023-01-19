import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const { Item, SubMenu, ItemGroup } = Menu;

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Teams', href: '#', current: false },
  { name: 'Directory', href: '#', current: false },
]
const middleNavigation = [
  {
    name: 'Books from Xidas Academy', href:'#'
  },
  {
    name: 'Books for High Schools', href: '#'
  },
  {
    name: 'Books for creators', href:'#'
  },
  {
    name: 'Books for developers', href:'3'
  }
]
const userNavigation = [
  { name: 'Your Profile', href: '/user' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Example() {

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
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm lg:static lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-5">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="#">
                      <span>
                        <img
                          className="block h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                          alt="Workflow"
                        />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0"></div>
                </div>
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  {/* <a
                    href="#"
                    className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </a> */}

                  {/* Profile dropdown */}
                  {user !== null && (
                    <Menu as="div" className="flex-shrink-0 relative ml-5">
                      <div>
                        <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <span className="sr-only">Open user menu</span>
                          {/* <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" /> */}
                          <a href="/user">
                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
                              <span className="text-lg font-medium leading-none text-white uppercase">
                                {/* {user && user.firstname.substring(0, 1)}
                                {user && user.lastname.substring(0, 1)}
                                */}
                              </span>
                            </span>
                          </a>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                          <>
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block py-2 px-4 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}

                            {/* {user !== null && (
                      <a href='/user'>
                  <Menu as="div" className="flex-shrink-0 relative ml-5">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                      
                     
                       <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-200">
                            <span className="text-lg font-medium leading-none text-white uppercase">
                            {user && user.name.substring(0,2)}
                            </span>
                        </span>
                    
                       

                      </Menu.Button>
                    </div>  
                  </Menu>
                     </a>
                  )} */}

                            <button
                              onClick={logout}
                              className="m-4 hover:bg-red-300 p-1 rounded-md hover:text-black"
                            >
                              Logout
                            </button>
                          </>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )}
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden overflow-y-hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4n overflow-y-hidden">
                {/* {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-gray-50",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))} */}

                {user !== null && (
                  <>
                    <p className="hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium">
                      Welcome, {user && user.firstname + " " + user.lastname}
                    </p>

                    <a
                      href="/user"
                      className="hover:bg-gray-100 hover:text-gray-700 text-gray-700 block rounded-md py-2 px-3 text-base font-medium"
                    >
                      User Dashboard
                    </a>
                  </>
                )}

{user === null && (
               <>
                <a
                  href="/register"
                  className="hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                >
                Sign up for a new account
                </a>

                <a
                  href="/login"
                  className="hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                >
               Login to your existing account
                </a>
               </>
)}

              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
