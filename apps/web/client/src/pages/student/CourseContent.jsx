import React from "react";
import { useParams } from "react-router-dom";
import EditCourseLayout from "../../layouts/EditCourseLayout";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/auth";
import { useCourseContentStore } from "../../store/courseContent";
import Editor from "../../components/Editor";
import { useModuleStore } from "../../store/module";
export default function CourseContent() {
  const { moduleId } = useParams();
  const { courseId } = useParams();
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
    getCourseDetails(token, courseId).then(() => {
      setLoading(false);
    });
  }, [token, getCourseDetails, courseId]);
  useEffect(() => {
    getModule(token, moduleId);
  }, [getModule, moduleId, token]);
  console.log(module);
  return (
    <EditCourseLayout
      loading={loading}
      title={course?.title}
      sections={course?.sections}
      courseId={courseId}
      currentModule={moduleId}
      editable={false}
    >
      <div key={moduleId}>
        <Editor editable={false} />
      </div>
    </EditCourseLayout>
  );
}
