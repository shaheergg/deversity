import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditCourseLayout from "../../layouts/EditCourseLayout";
import { useAuthStore } from "../../store/auth";
import { useCourseContentStore } from "../../store/courseContent";
import Editor from "../../components/Editor";
import { useModuleStore } from "../../store/module";

const EditCourse = () => {
  const { id } = useParams();
  const { moduleId } = useParams();
  const token = useAuthStore((state) => state.token);
  const getCourseDetails = useCourseContentStore(
    (state) => state.getCourseDetails
  );
  const course = useCourseContentStore((state) => state.course);
  const getModule = useModuleStore((state) => state.getModule);
  const module = useModuleStore((state) => state.module);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getCourseDetails(token, id).then(() => {
      setLoading(false);
    });
  }, [token, getCourseDetails, id]);
  useEffect(() => {
    getModule(token, moduleId);
  }, [getModule, moduleId, token]);
  console.log(module);
  return (
    <EditCourseLayout
      loading={loading}
      title={course?.title}
      sections={course?.sections}
      courseId={id}
      currentModule={moduleId}
    >
      {Number(moduleId) === 0 ? (
        <div className="flex items-center justify-center py-4 font-sans text-lg font-semibold text-center">
          Start Adding content by navigating to modules
        </div>
      ) : (
        <Editor module={module} />
      )}
    </EditCourseLayout>
  );
};

export default EditCourse;
