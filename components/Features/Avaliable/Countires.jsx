import React, { useState } from 'react';
import { Image } from 'antd';
import Link from 'next/link';
const Countires = () => {

    const [visible, setVisible] = useState(false);
    return (
        <>
        <div className="">
        <div className="">
          <div className="relative overflow-hidden shadow-md mb-6 text-left p-5">
            <div className="p-5">
              <h2 className="font-bold text-2xl mb-5 ">Countries we are avaliable in</h2>
              <p className="font-medium mt-3 mb-3">
             Xidas Academy / Book Base partners with stripe for money transfer, before signing up make sure to check if it is avaliable in your country.
              </p>

              <p className="lead opacity-50 mt-3 mb-3">
                If not avaliable, you can use alternate source to get an account in avaliable countries such as Payoneer etc.
              </p>
              <Link className="" href="https://medium.com/creating-on-demand/stripe-is-not-available-in-my-country-how-can-i-be-a-medium-writer-62d3c39f6bdb">
              Click here to view possible solutions 
              </Link>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Countires;
