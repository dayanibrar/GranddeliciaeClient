import Head from "next/head";
import { Landing, Sidenav } from "../../components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Realm from "realm-web";
import Products from "../../components/Products";

export default function Home() {
  const [courses, setProducts] = useState([]);
  const { query } = useRouter();

  useEffect(async () => {
    if (query.term) {
      // add your Realm App Id to the .env.local file
      const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const searchProducts = await user.functions.searchProducts(query.term);
        setProducts(() => searchProducts);
      } catch (error) {
        console.error(error);
      }
    }
  }, [query]);
  return (
      <>
       {/* <Head>
        <title>Xidas Academy</title>
      </Head>

    <div className='h-50'>
        <Landing />
      </div>

      <div className="container mx-auto px-10 mb-8">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
          <div>
      <Products courses={courses}/>
      </div>
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative col-8'>
              <Sidenav />
            </div>
          </div>
        </div>
      </div> */}
      <h1>
        hello guys
      </h1>
      </>
   
  
  );
}