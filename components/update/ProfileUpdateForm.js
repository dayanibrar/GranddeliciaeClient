import React from "react";
import { useState, useContext, useEffect, Fragment } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../../context";
import { useRouter } from "next/router";
import { LockClosedIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'


const ProfileUpdateForm = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [newFirstName, setnewFirstName] = useState("");
  const [newLastName, setnewLastName] = useState("");
  const [newName, setnewName] = useState("");
  const [newEmail, setnewEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false)


  // context
  const {
    state: { user },
    dispatch
  } = useContext(Context);
  // router
  const router = useRouter();

  // redirect if user is logged in
  // useEffect(() => {
  //   if (user !== null) router.push("/");
  // }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/update-profile-auth", { email });
      setSuccess(true);
      toast("Check your email for the authentication code");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    console.log(email, code, newFirstName, newLastName, newName);
    // return;
    try {
      setLoading(true);
      const { data } = await axios.post("/api/update-profile", {
        email,
        code,
        newFirstName,
        newLastName,
        newName,
        newEmail,
      });
      setEmail("");
      setCode("");
      setnewFirstName("");
      setnewLastName("");
      setnewName("");
      setnewEmail("");
      setLoading(false);
      toast("Your profile has been updated");
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Update your profile
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="/user/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Go back to your dashboard
              </a>
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={success ? handleResetPassword : handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <p className="mt-3 mb-3 text-center xl:text-md md:text-sm sm:text-sm text-gray-600">
                  Please provide your email address, for security reasons you would have
                  to verify your identity before you update your profile.
                </p>

                <div className="rounded-lg p-5 border border-gray-300">
                <p className="mt-3 mb-3 text-center xl:text-md md:text-sm sm:text-sm text-gray-600">
                  Remainder: when you update your profile, you would have to fill all the fields, either
                  enter new names or re-enter your current name and email.
                </p>
                </div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-md mt-3 mb-3 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              {success && (
                <>
                  <div>

                    <div className="rounded-lg p-5 border border-gray-300">
                    <p className="mt-3 mb-3 text-center font-bold xl:text-md md:text-sm sm:text-sm text-gray-600">
                 Your current account information
                </p>
                    
                <label htmlFor="user-current-firstname" className="sr-only">
                     Your current First Name
                    </label>
                    <input
                      id="user-current-firstname"
                      name="user-current-firstname"
                      type="text"
                      className="appearance-none rounded-md mt-3 mb-3  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder={user && user.firstname}
                      disabled
                    />

<label htmlFor="user-current-lastname" className="sr-only">
                     Your current Last Name
                    </label>
                    <input
                      id="user-current-lastname"
                      name="user-current-lastname"
                      type="text"
                      className="appearance-none rounded-md mt-3 mb-3  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder={user && user.lastname}
                      disabled
                    />

<label htmlFor="user-current-username" className="sr-only">
                     Your current username
                    </label>
                    <input
                      id="user-current-username"
                      name="user-current-username"
                      type="text"
                      className="appearance-none rounded-md mt-3 mb-3  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder={user && user.name}
                      disabled
                    />

<label htmlFor="user-current-email" className="sr-only">
                     Your current email
                    </label>
                    <input
                      id="user-current-email"
                      name="user-current-email"
                      type="text"
                      className="appearance-none rounded-md mt-3 mb-3  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder={user && user.email}
                      disabled
                    />

                    </div>

                    <label htmlFor="update-profile-code" className="sr-only">
                      Please provide the authentication code
                    </label>
                    <input
                      id="update-profile-code"
                      name="update-profile-code"
                      type="text"
                      autoComplete="update-profile-code"
                      required
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="appearance-none rounded-md mt-3 mb-3  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Authentication code"
                    />
                  </div>

                  <div>
                    <label htmlFor="update-profile-code" className="sr-only">
                      New First name
                    </label>
                    <input
                      id="new-first-name"
                      name="new-first-name"
                      type="text"
                      autoComplete="new-first-name"
                      required
                      value={newFirstName}
                      onChange={(e) => setnewFirstName(e.target.value)}
                      className="appearance-none rounded-md mt-3 mb-3  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="New first name"
                    />
                    
                    <label htmlFor="update-profile-code" className="sr-only">
                      New Last name
                    </label>
                    <input
                      id="new-last-name"
                      name="new-last-name"
                      type="text"
                      autoComplete="new-last-name"
                      required
                      value={newLastName}
                      onChange={(e) => setnewLastName(e.target.value)}
                      className="appearance-none rounded-md mt-3 mb-3  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="New Last name"
                    />


                              <label htmlFor="new-name" className="sr-only">
                                New username
                              </label>
                              <input
                                id="new-name"
                                name="new-name"
                                type="text"
                                autoComplete="new-name"
                                required
                                value={newName}
                                onChange={(e) => setnewName(e.target.value)}
                                className="appearance-none rounded-md mt-3 mb-3 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="New name"
                              />

<label htmlFor="new-email" className="sr-only">
                                New Email
                              </label>
                              <input
                                id="new-email"
                                name="new-email"
                                type="text"
                                autoComplete="new-emaild"
                                required
                                value={newEmail}
                                onChange={(e) => setnewEmail(e.target.value)}
                                className="appearance-none rounded-md mt-3 mb-3 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="New email"
                              />

                            </div>
                          </>
                        )}
                      </div>

                      <div className="rounded-lg p-5 border border-gray-300">
                <p className="mt-3 mb-3 text-center xl:text-md md:text-sm sm:text-sm text-gray-600">
                Confirming this will log you out and when you log back in with current/new email, your
                account will be updated.
                </p>
                </div>

            <div>
              <button
                type="submit"
                disabled={loading || !email}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                {loading ? <SyncOutlined spin /> : "Update my profile"}
              </button>

              <div className="mt-5 mb-5 rounded-lg p-5 border border-gray-300">
                <p className="mt-3 mb-3 text-center xl:text-md md:text-sm sm:text-sm text-gray-600">
                Once you are done with updating your account click the &quot;Update&quot; button and then
                Logout so that changes can be seen and made.
                </p>
                </div>

              <button
                type="submit"
                onClick={logout}
                // disabled={loading || !email}
                className="group mt-5 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-red-100 group-hover:text-red-200"
                    aria-hidden="true"
                  />
                </span>
                {loading ? <SyncOutlined spin /> : "Logout"}
              </button>

              

              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdateForm;
