import { Landing, Cards, RegisterComp, LoginComp } from "../components";
import Head from "next/head";
import Signedoutnav from "../components/nav/signedoutnav";
const Register = () => {

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

      <Signedoutnav />

      <RegisterComp />

      {/* <div className="container mx-auto px-10 mb-8">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-12 col-span-1'>
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative col-8'>
            </div>
          </div>
        </div>
      </div> */}

    </>
  );
};

export default Register;
