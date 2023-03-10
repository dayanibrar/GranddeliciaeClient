import { useState } from "react";
import axios from "axios";
import InstructorRoute from "../../../components/routes/InstructorRoute";
import CourseCreateForm from "../../../components/forms/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { CreateLanding, CreateCourseForm } from "../../../components";
import CreateProductForm from "../../../components/instructor/CreateProductForm";
import InstructorCreatenav from "../../../components/nav/InstructorCreateNav";
const CourseCreate = () => {
  // state
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "9.99",
    uploading: false,
    paid: true,
    category: "",
    loading: false,
  });
  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  // router
  const router = useRouter();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues({ ...values, loading: true });
    // resize
    Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
        let { data } = await axios.post("/api/course/upload-image", {
          image: uri,
        });
        console.log("IMAGE UPLOADED", data);
        // set image in the state
        setImage(data);
        setValues({ ...values, loading: false });
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        toast("Image upload failed. Try later.");
      }
    });
  };

  const handleImageRemove = async () => {
    try {
      // console.log(values);
      setValues({ ...values, loading: true });
      const res = await axios.post("/api/course/remove-image", { image });
      setImage({});
      setPreview("");
      setUploadButtonText("Upload Image");
      setValues({ ...values, loading: false });
    } catch (err) {
      console.log(err);
      setValues({ ...values, loading: false });
      toast("Image upload failed. Try later.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(values);
      const { data } = await axios.post("/api/course", {
        ...values,
        image,
      });
      toast("Great! Now you can start adding lessons");
      router.push("/instructor");
    } catch (err) {
      toast(err.response.data);
    }
  };

  return (
    <InstructorRoute>
     {/* <CreateLanding /> */}
     <InstructorCreatenav />
     <div className="">
     <CreateProductForm 
     handleSubmit={handleSubmit}
     handleImage={handleImage}
     handleChange={handleChange}
     values={values}
     setValues={setValues}
     preview={preview}
     uploadButtonText={uploadButtonText}
     handleImageRemove={handleImageRemove}
     />
     </div>
   

     {/* <div className="container mx-auto px-10 mb-8">
        
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
          <CreateCourseForm 
       handleSubmit={handleSubmit}
       handleImage={handleImage}
       handleChange={handleChange}
       values={values}
       setValues={setValues}
       preview={preview}
       uploadButtonText={uploadButtonText}
       handleImageRemove={handleImageRemove}
      />
          </div>
         
        </div>
      </div> */}
      {/* <pre>{JSON.stringify(values, null, 4)}</pre>
      <hr />
      <pre>{JSON.stringify(image, null, 4)}</pre> */}
    </InstructorRoute>
  );
};

export default CourseCreate;
