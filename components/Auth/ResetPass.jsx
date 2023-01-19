import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../../context";
import { useRouter } from "next/router";
import { LockClosedIcon } from "@heroicons/react/outline";
const ResetPass = () => {
  // state
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setnewName] = useState("");
  const [loading, setLoading] = useState(false);
 

  // context
  const {
    state: { user },
  } = useContext(Context);
  // router
  const router = useRouter();

  // redirect if user is logged in
  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/forgot-password", { email });
      setSuccess(true);
      toast("Check your email for the secret code");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    console.log(email, code, newPassword, newName);
    // return;
    try {
      setLoading(true);
      const { data } = await axios.post("/api/reset-password", {
        email,
        code,
        newPassword,
        newName,
      });
      setEmail("");
      setCode("");
      setNewPassword("");
      setnewName("");
      setLoading(false);
      toast("Great! Now you can login with your new password");
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
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
              Reset your password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Login to your account
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              {success && (
                <>
                  <div>
                    <label htmlFor="password-reset-code" className="sr-only">
                      Authentication code
                    </label>
                    <input
                      id="password-reset-code"
                      name="password-reset-code"
                      type="text"
                      autoComplete="password-reset-code"
                      required
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>

                  <div>
                    <label htmlFor="password-reset-code" className="sr-only">
                      New Password
                    </label>
                    <input
                      id="new-password"
                      name="new-password"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="New password"
                    />

<label htmlFor="name-reset-code" className="sr-only">
                      New name
                    </label>
                    <input
                      id="new-name"
                      name="new-name"
                      type="text"
                      autoComplete="new-password"
                      required
                      value={newName}
                      onChange={(e) => setnewName(e.target.value)}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="New name"
                    />

                  </div>
                </>
              )}
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
                {loading ? <SyncOutlined spin /> : "Reset my password"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <div class="p-0">
          <div className="container mx-auto mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 col-span-1">
                <div className="lg:sticky relative col-8">
                  <h1 className="text-xl mt-3 mb-3  md:text-lg text-black bg-white/20 hover:backdrop-brightness-100 transition duration-500 rounded-lg">
                    Already a registered user/seller ? Login here into your
                    existing account
                  </h1>
                  <form onSubmit={success ? handleResetPassword : handleSubmit}>
                    <input
                      type="email"
                      className="form-control mb-4 p-4 form-control mb-4 p-4 form-control mb-4 p-4 form-control appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                      required
                    />
                    {success && (
                      <>
                        <input
                          type="text"
                          className="form-control mb-4 p-4 form-control mb-4 p-4 form-control appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          placeholder="Enter secret code"
                          required
                        />

                        <input
                          type="password"
                          className="form-control mb-4 p-4 form-control mb-4 p-4 form-control appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="New Password"
                          required
                        />
                      </>
                    )}

                    <button
                      type="submit"
                      className="transition duration-500  ease transform hover:-translate-y-1 inline-block bg-black text-lg font-medium rounded-lg text-white px-8 py-3 cursor-pointer"
                      disabled={loading || !email}
                    >
                      {loading ? <SyncOutlined spin /> : "Confirm Reset"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ResetPass;
