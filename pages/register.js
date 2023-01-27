import { Landing, Cards, RegisterComp, LoginComp } from "../components";
import Head from "next/head";
import Signedoutnav from "../components/nav/signedoutnav";
const Register = () => {

  return (
    <>
     <Head>
        <title>TGD - Create your account</title>
        {/* Meta Tags */}
        <meta name="description" content="TGD - Create your account and experience a luxurious getaway for the senses " />
      </Head>

      <RegisterComp />

    </>
  );
};

export default Register;
