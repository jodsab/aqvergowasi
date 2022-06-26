import React from "react";
import CourseRegister from "../../organisms/CourseRegister";
import CourseInfo from "../../organisms/CourseInfo";

const CoursesTemplate = ({ ...props }) => {
    console.log('PROPS TEMPLATE',props)
  return (
    <>
      <CourseRegister {...props} />
      <CourseInfo {...props} />
    </>
  );
};

export default CoursesTemplate;
