import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import axios from "axios";
import { Avatar, Tooltip, Button, Modal, List } from "antd";
import {
  EditOutlined,
  CheckOutlined,
  UploadOutlined,
  QuestionOutlined,
  CloseOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import AddLessonForm from "../../../../components/forms/AddLessonForm";
import { toast } from "react-toastify";
import Item from "antd/lib/list/Item";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Description and Content",
    },
    // More sections...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const CourseView = () => {
  const [course, setCourse] = useState({});
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  // for lessons
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    title: "",
    content: "",
    video: {},
  });
  const [uploading, setUploading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Video");
  const [progress, setProgress] = useState(0);
  // student count
  const [students, setStudents] = useState(0);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  useEffect(() => {
    course && studentCount();
  }, [course]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setCourse(data);
  };

  const studentCount = async () => {
    const { data } = await axios.post(`/api/instructor/student-count`, {
      courseId: course._id,
    });
    console.log("STUDENT COUNT => ", data);
    setStudents(data.length);
  };

  // FUNCTIONS FOR ADD LESSON
  const handleAddLesson = async (e) => {
    e.preventDefault();
    // console.log(values);
    try {
      const { data } = await axios.post(
        `/api/course/lesson/${slug}/${course.instructor._id}`,
        values
      );
      // console.log(data)
      setValues({ ...values, title: "", content: "", video: {} });
      setProgress(0);
      setUploadButtonText("Upload video");
      setVisible(false);
      setCourse(data);
      toast.warning("Lesson added");
    } catch (err) {
      console.log(err);
      toast.warning("Lesson add failed");
    }
  };

  const handleVideo = async (e) => {
    try {
      const file = e.target.files[0];
      setUploadButtonText(file.name);
      setUploading(true);

      const videoData = new FormData();
      videoData.append("video", file);
      // save progress bar and send video as form data to backend
      const { data } = await axios.post(
        `/api/course/video-upload/${course.instructor._id}`,
        videoData,
        {
          onUploadProgress: (e) => {
            setProgress(Math.round((100 * e.loaded) / e.total));
          },
        }
      );
      // once response is received
      console.log(data);
      setValues({ ...values, video: data });
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
      toast.warning("Video upload failed");
    }
  };

  const handleVideoRemove = async () => {
    try {
      setUploading(true);
      const { data } = await axios.post(
        `/api/course/video-remove/${course.instructor._id}`,
        values.video
      );
      console.log(data);
      setValues({ ...values, video: {} });
      setUploading(false);
      setUploadButtonText("Upload another video");
    } catch (err) {
      console.log(err);
      setUploading(false);
      toast.warning("Video remove failed");
    }
  };

  const handlePublish = async (e, courseId) => {
    try {
      let answer = window.confirm(
        "Once you publsih your course, it will be live in the marketplace for users to enroll"
      );
      if (!answer) return;
      const { data } = await axios.put(`/api/course/publish/${courseId}`);
      setCourse(data);
      toast.warning("Congrats! Your course is live");
    } catch (err) {
      toast.warning("Course publish failed. Try again");
    }
  };

  const handleUnpublish = async (e, courseId) => {
    try {
      let answer = window.confirm(
        "Once you unpublsih your course, it will no be available for users to enroll"
      );
      if (!answer) return;
      const { data } = await axios.put(`/api/course/unpublish/${courseId}`);
      setCourse(data);
      toast.warning("Your course is unpublished");
    } catch (err) {
      toast.warning("Course publish failed. Try again");
    }
  };

  return (
    <InstructorRoute>
      <div className="contianer-fluid">
        <div className="min-h-full">
          <div className="bg-gray-800 pb-32">
            <Disclosure as="nav" className="bg-gray-800">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="border-b border-gray-700">
                      <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8"
                              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                              alt="Your Company"
                            />
                          </div>
                          <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                              {navigation.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-900 text-white"
                                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                    "px-3 py-2 rounded-md text-sm font-medium"
                                  )}
                                  aria-current={
                                    item.current ? "page" : undefined
                                  }
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-4 flex items-center md:ml-6">
                            <button
                              type="button"
                              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                              <span className="sr-only">
                                View notifications
                              </span>
                              <BellIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                              <div>
                                <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                  <span className="sr-only">
                                    Open user menu
                                  </span>
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src={user.imageUrl}
                                    alt=""
                                  />
                                </Menu.Button>
                              </div>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                      {({ active }) => (
                                        <a
                                          href={item.href}
                                          className={classNames(
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-2 text-sm text-gray-700"
                                          )}
                                        >
                                          {item.name}
                                        </a>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                          {/* Mobile menu button */}
                          <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                              <XMarkIcon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <Bars3Icon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </Disclosure.Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                    <div className="space-y-1 px-2 py-3 sm:px-3">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block px-3 py-2 rounded-md text-base font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 pt-4 pb-3">
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none text-white">
                            {user.name}
                          </div>
                          <div className="text-sm font-medium leading-none text-gray-400">
                            {user.email}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <header className="py-10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-white">
                  Dashboard
                </h1>
              </div>
            </header>
          </div>

          <main className="-mt-32">
            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                <div className="h-126 rounded-lg border-4 border-dashed border-gray-200">
               
                  {course && (
                    <div className="bg-white">
                      <div className="mx-auto max-w-2xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                          {/* Image gallery */}
                          <Tab.Group as="div" className="flex flex-col-reverse">
                            {/* Image selector */}

                            <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                              <Tab.Panel>
                                <img
                                  src={
                                    course.image
                                      ? course.image.Location
                                      : "/course.png"
                                  }
                                  alt={course.name}
                                  className="h-full w-full object-cover object-center sm:rounded-lg"
                                />
                              </Tab.Panel>
                            </Tab.Panels>
                          </Tab.Group>

                          {/* Product info */}
                          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                              {course.name}
                            </h1>

                            <div className="mt-3">
                              <h2 className="sr-only">Product information</h2>
                              <p className="text-3xl tracking-tight text-gray-900">
                                ${course.price}
                              </p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-3">
                              <div className="flex items-center">
                                <p className="">Service Status and Info: </p>

                                {course.lessons && course.lessons.length < 5 ? (
                                  <Tooltip title="Min 5 lessons required to publish">
                                    <QuestionOutlined className="h5 pointer text-danger" />
                                  </Tooltip>
                                ) : course.published ? (
                                  <Tooltip title="Unpublish">
                                    <CloseOutlined
                                      onClick={(e) =>
                                        handleUnpublish(e, course._id)
                                      }
                                      className="h5 pointer text-danger"
                                    />
                                  </Tooltip>
                                ) : (
                                  <Tooltip title="Publish">
                                    <CheckOutlined
                                      onClick={(e) =>
                                        handlePublish(e, course._id)
                                      }
                                      className="h5 pointer text-success"
                                    />
                                  </Tooltip>
                                )}
                              </div>
                            </div>

                            <div className="mt-6">
                              <h3 className="sr-only">Description</h3>
                              <p className="font-bold font-lg">
                                {course.category} --{" "}
                                {course &&
                                  course.lessons &&
                                  course.lessons.length}{" "}
                                Lessons -- {`${students} Enrolled`}
                              </p>

                              {/* <div
                     className="space-y-6 text-base text-gray-700"
                     dangerouslySetInnerHTML={{ __html: course.lessons && course.lessons.length }}
                   />
                    */}
                            </div>

                            <form className="mt-6">
                              {/* Colors */}

                              <div className="sm:flex-col1 mt-10 flex">
                                {/* <button
                                  onClick={() => setVisible(true)}
                                
                                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-yellow-600 py-3 px-8 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                >
                                  Add Content
                                </button> */}

<div className="row">
                         <Button
                           onClick={() => setVisible(true)}
                           className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-yellow-600 hover:border-yellow-600 hover:text-white py-3 px-8 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                           icon={<UploadOutlined />}
                           size="large"
                         >
                           Add Content
                         </Button>
                       </div>
                       <br />
                       <Modal
                         title="+ Add Lesson"
                         centered
                         visible={visible}
                         onCancel={() => setVisible(false)}
                         footer={null}
                       >
                         <AddLessonForm
                           values={values}
                           setValues={setValues}
                           handleAddLesson={handleAddLesson}
                           uploading={uploading}
                           uploadButtonText={uploadButtonText}
                           handleVideo={handleVideo}
                           progress={progress}
                           handleVideoRemove={handleVideoRemove}
                         />
                       </Modal>

                                <button
                                  onClick={() =>
                                    router.push(
                                      `/instructor/course/edit/${slug}`
                                    )
                                  }
                                  type="button"
                                  className="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                                >
                                  <ModeEditIcon
                                    className="h-6 w-6 flex-shrink-0"
                                    aria-hidden="true"
                                  />
                                  <span className="sr-only">Edit Service</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                        <section
                          aria-labelledby="details-heading"
                          className="mt-12"
                        >
                          <h2 id="details-heading" className="sr-only">
                            Additional details
                          </h2>

                          <div className="divide-y divide-gray-200 border-t mt-5">
                            {product.details.map((detail) => (
                              <Disclosure as="div" key={detail.name}>
                                {({ open }) => (
                                  <>
                                    <h3>
                                      <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                        <span
                                          className={classNames(
                                            open
                                              ? "text-yellow-600"
                                              : "text-gray-900",
                                            "text-sm font-medium"
                                          )}
                                        >
                                          {detail.name}
                                        </span>
                                        <span className="ml-6 flex items-center">
                                          {open ? (
                                            <MinusIcon
                                              className="block h-6 w-6 text-yellow-400 group-hover:text-yellow-500"
                                              aria-hidden="true"
                                            />
                                          ) : (
                                            <PlusIcon
                                              className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                              aria-hidden="true"
                                            />
                                          )}
                                        </span>
                                      </Disclosure.Button>
                                    </h3>
                                    <Disclosure.Panel
                                      as="div"
                                      className="prose prose-sm pb-6"
                                    >
                                      <ul>
                                        <ul>
                                          <div
                                            className="space-y-6 text-base text-gray-700"
                                            dangerouslySetInnerHTML={{
                                              __html: course.description,
                                            }}
                                          />
                                        </ul>
                                        <ul>
                                          <h4>
                                            {course &&
                                              course.lessons &&
                                              course.lessons.length}{" "}
                                            Lessons
                                          </h4>
                                          <List
                                            itemLayout="horizontal"
                                            dataSource={
                                              course && course.lessons
                                            }
                                            renderItem={(item, index) => (
                                              <Item>
                                                <Item.Meta
                                                  avatar={
                                                    <Avatar>{index + 1}</Avatar>
                                                  }
                                                  title={item.title}
                                                ></Item.Meta>
                                              </Item>
                                            )}
                                          ></List>
                                        </ul>
                                      </ul>
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            ))}
                          </div>
                        </section>
                      </div>
                    </div>
                    // <div className="container-fluid pt-1">
                    //   <div className="media pt-2">
                    //     <Avatar
                    //       size={80}
                    //       src={course.image ? course.image.Location : "/course.png"}
                    //     />

                    //     <div className="media-body pl-2">
                    //       <div className="row">
                    //         <div className="col">
                    //           <h5 className="mt-2 text-primary">{course.name}</h5>
                    //           <p style={{ marginTop: "-10px" }}>
                    //             {course.lessons && course.lessons.length} Lessons
                    //           </p>
                    //           <p style={{ marginTop: "-15px", fontSize: "10px" }}>
                    //             {course.category}
                    //           </p>
                    //         </div>

                    //         <div className="d-flex pt-4">
                    //           <Tooltip title={`${students} Enrolled`}>
                    //             <UserSwitchOutlined className="h5 pointer text-info mr-4" />
                    //           </Tooltip>

                    //           <Tooltip title="Edit">
                    //             <EditOutlined
                    //               onClick={() =>
                    //                 router.push(`/instructor/course/edit/${slug}`)
                    //               }
                    //               className="h5 pointer text-warning mr-4"
                    //             />
                    //           </Tooltip>

                    //           {course.lessons && course.lessons.length < 5 ? (
                    //             <Tooltip title="Min 5 lessons required to publish">
                    //               <QuestionOutlined className="h5 pointer text-danger" />
                    //             </Tooltip>
                    //           ) : course.published ? (
                    //             <Tooltip title="Unpublish">
                    //               <CloseOutlined
                    //                 onClick={(e) => handleUnpublish(e, course._id)}
                    //                 className="h5 pointer text-danger"
                    //               />
                    //             </Tooltip>
                    //           ) : (
                    //             <Tooltip title="Publish">
                    //               <CheckOutlined
                    //                 onClick={(e) => handlePublish(e, course._id)}
                    //                 className="h5 pointer text-success"
                    //               />
                    //             </Tooltip>
                    //           )}
                    //         </div>
                    //       </div>
                    //     </div>
                    //   </div>
                    //   <hr />
                    //   <div className="row">
                    //     <div className="col">
                    //       <ReactMarkdown source={course.description} />
                    //     </div>
                    //   </div>

                    //   <div className="row">
                    //     <Button
                    //       onClick={() => setVisible(true)}
                    //       className="col-md-6 offset-md-3 text-center"
                    //       type="primary"
                    //       shape="round"
                    //       icon={<UploadOutlined />}
                    //       size="large"
                    //     >
                    //       Add Lesson
                    //     </Button>
                    //   </div>

                    //   <br />

                    //   <Modal
                    //     title="+ Add Lesson"
                    //     centered
                    //     visible={visible}
                    //     onCancel={() => setVisible(false)}
                    //     footer={null}
                    //   >
                    //     <AddLessonForm
                    //       values={values}
                    //       setValues={setValues}
                    //       handleAddLesson={handleAddLesson}
                    //       uploading={uploading}
                    //       uploadButtonText={uploadButtonText}
                    //       handleVideo={handleVideo}
                    //       progress={progress}
                    //       handleVideoRemove={handleVideoRemove}
                    //     />
                    //   </Modal>

                    //   <div className="row pb-5">
                    //     <div className="col lesson-list">
                    //       <h4>
                    //         {course && course.lessons && course.lessons.length} Lessons
                    //       </h4>
                    //       <List
                    //         itemLayout="horizontal"
                    //         dataSource={course && course.lessons}
                    //         renderItem={(item, index) => (
                    //           <Item>
                    //             <Item.Meta
                    //               avatar={<Avatar>{index + 1}</Avatar>}
                    //               title={item.title}
                    //             ></Item.Meta>
                    //           </Item>
                    //         )}
                    //       ></List>
                    //     </div>
                    //   </div>
                    // </div>
                  )}
                </div>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </InstructorRoute>
  );
};

export default CourseView;
