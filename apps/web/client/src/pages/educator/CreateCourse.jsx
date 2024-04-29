import React, { useState } from "react";
import EducatorLayout from "../../layouts/EducatorLayout";
import CourseOverview from "../../components/CourseOverview";
const CreateCourse = () => {
  const formData = {};
  let [steps] = useState(["1. Overview", "2. Add Resources"]);
  const [selected, setSelected] = useState();
  return (
    <EducatorLayout current={1}>
      <div className="flex items-center">
        <h2 className="text-4xl font-semibold">Create Course</h2>
      </div>
      <div className="py-4">
        <CourseOverview />
      </div>
    </EducatorLayout>
  );
};

export default CreateCourse;
