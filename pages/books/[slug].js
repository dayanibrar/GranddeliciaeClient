import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SingleCourseJumbotron from "../../components/cards/SingleCourseJumbotron";
import PreviewModal from "../../components/modal/PreviewModal";
import SingleCourseLessons from "../../components/cards/SingleCourseLessons";
import { Context } from "../../context";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import Head from "next/head";
import { Landing } from "../../components";
import { OfferComp } from "../../components"
import ProductPage from "../../components/course/productpage";
import * as Realm from "realm-web";

const SingleCourse = ({ course }) => {


  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState({});
  const [product, setProduct] = useState();
  const { query } = useRouter();

  useEffect(async () => {
    if (query.id) {
      // add your Realm App Id to the .env.local file
      const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const oneProduct = await user.functions.getOneProduct(query.id);
        setProduct(() => oneProduct);
      } catch (error) {
        console.error(error);
      }
    }
  }, [query]);


  // context
  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    if (user && course) checkEnrollment();
  }, [user, course]);

  const checkEnrollment = async () => {
    const { data } = await axios.get(`/api/check-enrollment/${course._id}`);
    console.log("CHECK ENROLLMENT", data);
    setEnrolled(data);
  };


  const router = useRouter();
  const { slug } = router.query;

  const handlePaidEnrollment = async () => {
    // console.log("handle paid enrollment");
    try {
      setLoading(true);
      // check if user is logged in
      if (!user) router.push("/login");
      // check if already enrolled
      if (enrolled.status)
        return router.push(`/user/course/${enrolled.course.slug}`);
      const { data } = await axios.post(`/api/paid-enrollment/${course._id}`);
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_API);
      stripe.redirectToCheckout({ sessionId: data });
    } catch (err) {
      toast("Enrollment failed, try again.");
      console.log(err);
      setLoading(false);
    }
  };

  const handleFreeEnrollment = async (e) => {
    // console.log("handle free enrollment");
    e.preventDefault();
    try {
      // check if user is logged in
      if (!user) router.push("/login");
      // check if already enrolled
      if (enrolled.status)
        return router.push(`/user/course/${enrolled.course.slug}`);
      setLoading(true);
      const { data } = await axios.post(`/api/free-enrollment/${course._id}`);
      toast(data.message);
      setLoading(false);
      router.push(`/user/course/${data.course.slug}`);
    } catch (err) {
      toast("Enrollment failed. Try again.");
      console.log(err);
      setLoading(false);
    }
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

      {/* <div className='h-50'>
      <OfferComp />
      </div> */}

      <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100">
        <div className="mx-auto px-0 mb-8 pb-80 container">

          <SingleCourseJumbotron
            course={course}
            showModal={showModal}
            setShowModal={setShowModal}
            preview={preview}
            setPreview={setPreview}
            user={user}
            loading={loading}
            handlePaidEnrollment={handlePaidEnrollment}
            handleFreeEnrollment={handleFreeEnrollment}
            enrolled={enrolled}
            setEnrolled={setEnrolled}
          />
          <PreviewModal
            showModal={showModal}
            setShowModal={setShowModal}
            preview={preview}
          />

          {course.lessons && (
            <SingleCourseLessons
              course={course}
              lessons={course.lessons}
              setPreview={setPreview}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}

        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { data } = await axios.get(`http://localhost:8000/api/course/${query.slug}`);
  return {
    props: {
      course: data,
    },
  };
}

export default SingleCourse;
