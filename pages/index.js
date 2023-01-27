import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";

// Components
import NavbarMain from "../components/components/Navbar";
import Header from "../components/components/header/Header";
import MainDisplay from "../components/components/background/MainDisplay";
import Feature from "../components/components/Feature.js/Feature";
import OurRooms from "../components/components/Room/OurRooms";
import LearnMore from "../components/components/about/LearnMore";
import NewsLetter from "../components/components/NewsLetter/NewsLetter";
import Testimonials from "../components/components/Reviews/Testimonial";
import Faqs from "../components/components/Faqs/FrequentlyAskedQuestions";
import Footer from "../components/components/Footers/Footer";

const Index = ({ courses }) => {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const { data } = await axios.get("/api/courses");
  //     setCourses(data);
  //   };
  //   fetchCourses();
  // }, []);

  return (
    <>
      <div className="bg-black">
          <NavbarMain />
          <Header />
        <MainDisplay />
        <Feature />
        <OurRooms/>
        {courses.map((course) => (
            <div key={course._id} className="col-md-4">
              <CourseCard course={course} />
            </div>
          ))}
        <LearnMore />
        <Testimonials />
        <Faqs />
        <NewsLetter />
        <Footer />

          

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
