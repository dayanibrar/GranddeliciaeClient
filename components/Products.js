import React from "react";
import Product from "./Product";

const Products = ({ courses }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      {courses.map((course) => (
        <Product key={course._id} course={course} />
      ))}

         {/* {courses &&
          courses.map((courses) => {
            return <p key={course._id}>{course.name}</p>;
          })} */}
    </div>
  );
};

export default Products;