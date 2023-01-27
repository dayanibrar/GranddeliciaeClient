import Head from "next/head";
import { Landing, LoginComp, ResetPasswordComp } from "../components";
import Signedoutnav from "../components/nav/signedoutnav";
const ForgotPassword = () => {
 
  return (
    <>
       <Head>
        <title>Xidas Academy</title>
        {/* Meta Tags */}
       
      </Head>

      {/* <Signedoutnav /> */}

      <ResetPasswordComp />

      {/* <div className="container mx-auto px-10 mb-8">
     
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
         
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative col-8'>
           <LoginComp />
            </div>
          </div>
        </div>
      </div> */}

    </>
  );
};

export default ForgotPassword;
