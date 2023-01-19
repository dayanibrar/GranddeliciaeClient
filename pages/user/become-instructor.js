import { useContext, useState } from "react";
import { Context } from "../../context";
import axios from "axios";
import { toast } from "react-toastify";
import Head from "next/head";
import { BecomeInstr, Payoutsetup, FeatureCard, CountiresAvaliable } from "../../components";
import Header from "../../components/becomeseller/header";
import FeatureCardOne from "../../components/becomeseller/featuresone";
import FeatureTwo from "../../components/becomeseller/featureTwo";
import FeatureThree from "../../components/becomeseller/featureThree";
import FeatureFour from "../../components/becomeseller/featurefour";
import Blog from "../../components/becomeseller/blog";
import Footer from "../../components/becomeseller/footer";
import Countries from "../../components/becomeseller/countries";
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
        <meta name="description" content="News and Blogs from Xidas Studios on latest and upcoming technologies, projects, services and more. Keep yourself updated on our page." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Xidas Studios Press and Blogs" key="title" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Header />
      <FeatureCardOne />
      <Countries />
      <FeatureTwo />
      <FeatureThree />
      <FeatureFour />
 
      <Blog />
      <Footer />
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
