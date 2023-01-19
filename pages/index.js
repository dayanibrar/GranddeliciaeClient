import axios from "axios";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import * as Realm from "realm-web";
import { Context } from "../context";
import NavbarMain from "../components/components/Navbar";
import Header from "../components/components/header/Header";
import MainDisplay from "../components/components/background/MainDisplay";

const Index = ({ course }) => {
  const [courses, setProducts] = useState([]);
  const { searchBook, setSearchBook, state, dispatch } = useContext(Context);
  const { published } = state;

  useEffect(async () => {
    // add your Realm App Id to the .env.local file
    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allProducts = await user.functions.getAllProducts();
      setProducts(() => allProducts);
      setSearchBook(() => allProducts);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Grand Deliciae Resorts</title>
        {/* Meta Tags */}
        <meta
          name="description"
          content="Escape to Grand Deliciae: A luxurious getaway for the senses"
        />
      </Head>

      <div className="bg-black">
        <NavbarMain />
        <Header />
       <MainDisplay />
      </div>
      
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Index;
