import React from "react";
import CoursesTemplate from "../../components/templates/CoursesTemplate";

const Course = ({ ...props }) => {
    console.log('PROPS',props)
  return <CoursesTemplate {...props} />;
};

export default Course;
