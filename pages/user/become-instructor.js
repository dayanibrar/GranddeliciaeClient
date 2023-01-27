import { useContext, useState } from "react";
import { Context } from "../../context";
import axios from "axios";
import { toast } from "react-toastify";
import Head from "next/head";
import { BecomeInstr, Payoutsetup, FeatureCard, CountiresAvaliable } from "../../components";
import Header from "../../components/becomeseller/header";

const BecomeInstructor = () => {
  // state
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
         <Head>
        <title>Xidas Academy</title>
        {/* Meta Tags */}
  
      </Head>

      <Header />
      {/* <FeatureCardOne />
      <Countries />
      <FeatureTwo />
      <FeatureThree />
      <FeatureFour />
 
      <Blog />
      <Footer /> */}
      {/* <div className='h-50'>
        <BecomeInstr />
      </div>

      <div className="container mx-auto px-10 mb-8">

        
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
      <div className='lg:col-span-4 col-span-1'>
            <div>
            <FeatureCard />
            </div>
      </div>
      <div className='lg:col-span-4 col-span-1'>
            <div>
            <FeatureCard />
            </div>
      </div>
      <div className='lg:col-span-4 col-span-1'>
            <div>
            <FeatureCard />
            </div>
      </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
         <Payoutsetup />
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative col-8'>
              <CountiresAvaliable />
            </div>
          </div>
         </div>
      </div> */}

     
    </>
  );
};

export default BecomeInstructor;
