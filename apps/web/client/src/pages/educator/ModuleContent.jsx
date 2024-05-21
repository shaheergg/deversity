import React from "react";
import { useParams } from "react-router-dom";

const ModuleContent = () => {
  const { sectionId, moduleId } = useParams();
  return <div>{sectionId + " " + moduleId} Modules</div>;
};

export default ModuleContent;
