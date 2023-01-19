import React from 'react';
import { useContext, useState } from "react";
import { Context } from "../../context";
import { Button } from "antd";
import axios from "axios";
import {
  SettingOutlined,
  UserSwitchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Payoutsetup = () => {
    const [loading, setLoading] = useState(false);
    const {
      state: { user },
    } = useContext(Context);
  
    const becomeInstructor = () => {
      // console.log("become instructor");
      setLoading(true);
      axios
        .post("/api/make-instructor")
        .then((res) => {
          console.log(res);
          window.location.href = res.data;
        })
        .catch((err) => {
          console.log(err.response.status);
          toast("Stripe onboarding failed. Try again.");
          setLoading(false);
        });
    };

  return (
      <>
       <div className="container">
        <div className="row">
          <div className="relative overflow-hidden shadow-md mb-6 text-left p-5">
            <div className="p-5">
              <VerifiedUserIcon className="display-1 mb-4" />
              <br />
              <h2 className="font-bold text-2xl mt-5 mb-5 ">Become an Book Base Seller</h2>
              <p className="font-medium mt-3 mb-3">
               80% of the books on here are/will be from independent sellers like you.
              </p>

              <button
                className="inline-block bg-black text-sm font-md rounded-md text-white px-3 py-2 cursor-pointer"
                type="primary"
                block
                shape="round"
                icon={loading ? <LoadingOutlined /> : <SettingOutlined />}
                size="large"
                onClick={becomeInstructor}
                disabled={
                  (user && user.role && user.role.includes("Instructor")) ||
                  loading
                }
              >
                {loading ? "Processing..." : "Sign up"}
              </button>

              <p className="lead opacity-50 mt-5 ">
                You will be redirected to stripe to complete onboarding process.
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Payoutsetup;
