import db from "../db"

// Educator Or Student can get all the resources for a course or a cjust a course's module
export const getAllResources = async (req, res) => {
  try {
    const { courseId, moduleId } = req.params;
    let resources;

    if (courseId) {
      resources = await db.resource.findMany({
        where: {
          courseId: courseId,
        },
      });
    } else if (moduleId) {
      resources = await db.resource.findMany({
        where: {
          moduleId: moduleId,
        },
      });
    } else {
      // Handle error when neither courseId nor moduleId is provided
      return res.status(400).send("Both courseId and moduleId are missing");
    }

    res.status(200).send({ data: resources });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while fetching resources");
  }
};


// Add a new resource to a module within a course
export const addResource = async (req, res) => {
  try {
    const { courseId, moduleId } = req.params;
    const { title, description, url, sectionId, type } = req.body;

    let newResource;

    // Check if sectionId is provided
    if (moduleId) {
      // Adding resource to a module
      newResource = await db.resource.create({
        data: {
          title,
          description,
          url,
          type,
          moduleId,
        },
      });
    } else {
      // Adding resource to a course
      newResource = await db.resource.create({
        data: {
          title,
          description,
          url,
          type,
          courseId,
        },
      });
    }
    res.status(200).json({ data: newResource });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while adding a resource");
  }
};
  
  // Update an existing resource within a module
  export const updateResource = async (req, res) => {
    try {
      const { resourceId } = req.params;
      const { title, description, url, sectionId, type } = req.body;
  
      const updatedResource = await db.resource.update({
        where: { id: resourceId },
        data: {
          title,
          description,
          url,
          type,
        },
      });
  
      res.status(200).send({ data: updatedResource });
    } catch (error) {
      console.log(error);
      res.status(500).send("An error occurred while updating the resource");
    }
  };
  
  // Delete a resource from a module
  export const deleteResource = async (req, res) => {
    try {
      const { resourceId } = req.params;
  
      await db.resource.delete({
        where: { id: resourceId },
      });
  
      res.status(200).send("Resource deleted successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("An error occurred while deleting the resource");
    }
  };


