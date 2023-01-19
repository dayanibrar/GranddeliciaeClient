import React from 'react';
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../../context";
import { useRouter } from "next/router";

const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    // state
    const {
      state: { user },
      dispatch,
    } = useContext(Context);
    // const { user } = state;
  
    // router
    const router = useRouter();
  
    useEffect(() => {
      if (user !== null) router.push("/");
    }, [user]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // console.table({ name, email, password });
      try {
        setLoading(true);
        const { data } = await axios.post(`/api/login`, {
          email,
          password,
        });
        // console.log("LOGIN RESPONSE", data);
        dispatch({
          type: "LOGIN",
          payload: data,
        });
        // save in local storage
        window.localStorage.setItem("user", JSON.stringify(data));
        // redirect
        router.push("/user");
        // setLoading(false);
      } catch (err) {
        toast(err.response.data);
        setLoading(false);
      }
    };
  
  return (
      <>
          <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
              <div class="p-0">

                  <div className="container mx-auto mb-8">
                      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                          {/* <div className='lg:col-span-4 col-span-1'>

  </div> */}
                          <div className='lg:col-span-7 col-span-1'>
                              <div className='lg:sticky relative col-8'>
                                  <h1 className='text-xl mt-3 mb-3  md:text-lg text-black bg-white/20 hover:backdrop-brightness-100 transition duration-500 rounded-lg'>Already a registered user/seller ? Login here into your existing account</h1>
                                  <form onSubmit={handleSubmit}>
                                      <input
                                          type="email"
                                          className="form-control mb-4 p-4 form-control appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          placeholder="Enter email "
                                          required
                                      />

                                      <input
                                          type="password"
                                          className="form-control mb-4 p-4 form-control appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white"
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                                          placeholder="Enter password"
                                          required
                                      />

                                      <button
                                          type="submit"
                                          className="transition duration-500  ease transform hover:-translate-y-1 inline-block bg-black text-lg font-medium rounded-lg text-white px-8 py-3 cursor-pointer"
                                          disabled={!email || !password || loading}
                                      >
                                          {loading ? <SyncOutlined spin /> : "Login"}
                                      </button>

                                      <a href='/forgot-password'><p className='mt-5'>Forgot password ? Reset it here</p></a>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
     
      </>
  );
};

export default login;
