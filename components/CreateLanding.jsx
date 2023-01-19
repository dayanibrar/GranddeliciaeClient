import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

const CreateLanding = () => {

    return (
      <>
       <div className='bg-white shadow-lg rounded-lg p-0 lg:p-0 mb-8'>
       <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
           <img
               src="/mainbg.jpg"
               alt="Book base main header"
               className='hero-image object-top absolute h-80 w-full object-cover shadow-lg brightness-75 hover:brightness-100 transition duration-500'
           />
           <h1 className='hero-text text-black bg-white/20 hover:backdrop-brightness-100 transition duration-500 p-5 rounded-lg'>
               <h2>
                 Welcome to your dashboard
               </h2>

              {/* <div className="text-left pt-1">
                <Link href="/">
                  <span className="inline-block bg-white text-sm font-md rounded-md text-gray-600 px-3 py-2 cursor-pointer">Get Started</span>
                </Link>
              </div> */}

           </h1>
       </div>
   </div>
    </>
    )
}

export default CreateLanding;