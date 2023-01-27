import React from 'react';
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import axios from "axios";
import Link from 'next/link';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { Tooltip } from "antd";
import { Modal, Button } from 'antd';

const InstructorCard = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
      loadCourses();
    }, []);
  
    const loadCourses = async () => {
      const { data } = await axios.get("/api/instructor-courses");
      setCourses(data);
    };
  
    const myStyle = { marginTop: "-15px", fontSize: "10px" };

    return (
      <>
      <h1>Dashcomponent</h1>
        {courses &&
          courses.map((course) => (
            <>
              <div className="" key={course._id}>
                <div className="shadow-md m-1">
                  <div className="group rounded-lg w-full h-full relative p-4 border-r border-b border-t border-l border-gray-200 sm:p-6">
                    <div className="h-72 rounded-xl overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                      <img
                        src={
                          course.image ? course.image.Location : "/course.png"
                        }
                        alt="product image"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="pt-10 pb-4 text-left">
                      <h3 className="text-xl font-medium text-gray-900">
                        <a href={`/instructor/course/view/${course.slug}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {course.name}
                        </a>
                      </h3>
                      <div className="mt-3 flex flex-col">
                        <p className="mt-1 text-sm text-left text-gray-500">
                          {course.published ? (
                            <Tooltip title="Published">
                              <CheckCircleIcon/>
                            </Tooltip>
                          ) : (
                            <Tooltip title="Unpublished">
                              <CloseIcon />
                            </Tooltip>
                          )}
                        </p>
                      </div>
                      <p className="mt-4 text-sm font-medium text-gray-500">
                        {course.description.substring(0, 100) +
                          " ................"}
                      </p>
                      <p className="mt-4 text-base font-medium text-gray-900">
                        {course.lessons.length} lessons <br />{" "}
                        {course.lessons.length < 5 ? (
                          <p style={myStyle} className="pt-5 text-base font-medium text-gray-900">
                            At least 5 lessons are required to publish a course
                          </p>
                        ) : course.published ? (
                          <p style={myStyle} className="pt-5 text-base font-medium text-gray-900">
                            Your course is live in the marketplace
                          </p>
                        ) : (
                          <p style={myStyle} className="pt-5 text-base font-medium text-gray-900">
                            Your course is ready to be published
                          </p>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
            // <div className='bg-white shadow-lg rounded-lg p-0 lg:p-0 pb-12 mb-8'>
            //     <div class="p-5">
            //         <div className="">
            //             <div className=''>
            //                 <div className='lg:col-span-12 col-span-1'>

            //                             <div className='' key={course._id}>
            //                                 <div>
            //                                         <img alt='' className='p-1 w-64 h-80 block cursor-pointer rounded-xl' src={course.image ? course.image.Location : "/course.png"} />
            //                                 </div>
            //                                 <div className='flex-1 card-block relative'>
            //                                     <div className="p-1">
            //                                         <h4 className='font-medium text-2xl mb-3'>{course.name}
            //                                         <span>
            //                                              <Link  href={`/instructor/course/view/${course.slug}`}>
            //                                                 <a>
            //                                                     <PlayCircleFilledWhiteIcon className="h2 pointer ml-16" />
            //                                                 </a>
            //                                             </Link>
            //                                                 {course.published ? (
            //                                                     <Tooltip title="Published">
            //                                                         <CheckCircleIcon className="h2 pointer ml-16" />
            //                                                     </Tooltip>
            //                                                 ) : (
            //                                                     <Tooltip title="Unpublished">
            //                                                         <CloseIcon className="h2 pointer ml-16" />
            //                                                     </Tooltip>
            //                                                 )}
            //                                         </span>
            //                                         </h4>
            //                                         <p className='leading-normal'>{course.description.substring(0, 200) + " ................"}</p>
            //                                         <p className="text-sm text-grey block mt-6">{course.lessons.length} lessons <br /> <span> By {course.instructor.name}</span>
            //                                         <span className="text-sm text-grey block mt-6">
            //                                                 {course.lessons.length < 5 ? (
            //                                                     <p style={myStyle} className="text-warning">
            //                                                         At least 5 lessons are required to publish a course
            //                                                     </p>
            //                                                 ) : course.published ? (
            //                                                     <p style={myStyle} className="text-green">
            //                                                         Your course is live in the marketplace
            //                                                     </p>
            //                                                 ) : (
            //                                                     <p style={myStyle} className="text-success">
            //                                                         Your course is ready to be published
            //                                                     </p>
            //                                                 )}
            //                                         </span>
            //                                         </p>
            //                                     </div>
            //                                 </div>
            //                             </div>

            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
          ))}
      </>
    );
};


export default InstructorCard;
