import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import axios from "axios";
import Link from "next/link";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
const books = () => {
  const {
    state: { user },
  } = useContext(Context);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/user-courses");
      setCourses(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
      {courses &&
        courses.map((course) => (
          <div className="" key={course._id}>
            <div className="shadow-md m-1">
              <div className="group rounded-lg w-full h-full relative p-4 border-r border-b border-t border-l border-gray-200 sm:p-6">
                <div className="h-72 rounded-xl overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                  <img
                    src={course.image ? course.image.Location : "/course.png"}
                    alt="product image"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="pt-10 pb-4 text-left">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={`/user/course/${course.slug}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {course.name}
                    </a>
                  </h3>
                  <div className="mt-3 flex flex-col items-center">
                    <p className="mt-1 text-sm text-left text-gray-500"> </p>
                  </div>
                  <p className="mt-4 text-sm font-medium text-gray-500">
                    {course.description.substring(0, 200) + " ................"}
                  </p>
                  <p className="mt-4 text-base font-medium text-gray-900">
                    {course.lessons.length} lessons <br />{" "}
                    <span> By {course.instructor.name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default books;
