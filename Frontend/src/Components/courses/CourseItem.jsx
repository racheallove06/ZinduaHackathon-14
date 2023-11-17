import React from "react";

function CourseItem({ item }) {
  return (
    <div className={`bg-[${item.image}]`}>
      <h2>{item.title}</h2>
    </div>
  );
}

export default CourseItem;
