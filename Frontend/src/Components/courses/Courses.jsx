import React from "react";
import course1 from "../src/assets/images/course1.png";
import CourseItem from "./CourseItem";

const courseItems = [
  {
    image: `url(${course1})`,
    title: "Bee Keeping",
  },
  {
    image: `url(${course1})`,
    title: "Bee Keeping",
  },
  {
    image: `url(${course1})`,
    title: "Bee Keeping",
  },
  {
    image: `url(${course1})`,
    title: "Bee Keeping",
  },
  {
    image: `url(${course1})`,
    title: "Bee Keeping",
  },
  {
    image: `url(${course1})`,
    title: "Bee Keeping",
  },
  {
    image: `url(${course1})`,
    title: "Bee Keeping",
  },
  {
    image: `url(${course1})`,
    title: "Bee Keeping",
  },
];
const Courses = () => {
  return (
    <div>
      {courseItems.map((item) => (
        <CourseItem item={item} key={item.title} />
      ))}
    </div>
  );
};

export default Courses;
