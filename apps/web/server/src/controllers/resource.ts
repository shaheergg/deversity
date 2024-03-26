import db from "../db"

// Educator Or Student can get all the resources for a course or a cjust a course's module
// Get all resources for a course
export const getResourcesForCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const resources = await db.resource.findMany({
      where: { courseId },
    });
    res.status(200).send({ data: resources });
  } catch (error) {
    console.error("Error fetching resources for course:", error);
    res.status(500).send("An error occurred while fetching resources for course");
  }
};

// Get all resources for a module
export const getResourcesForModule = async (req, res) => {
  try {
    const { moduleId } = req.params;
    const resources = await db.resource.findMany({
      where: { moduleId },
    });
    res.status(200).send({ data: resources });
  } catch (error) {
    console.error("Error fetching resources for module:", error);
    res.status(500).send("An error occurred while fetching resources for module");
  }
};

// Add a new resource to a module within a course
export const addResourceToModule = async (req, res) => {
  try {
    const { moduleId } = req.params;
    const { title, description, url, type } = req.body;

    const newResource = await db.resource.create({
      data: {
        title,
        description,
        url,
        type,
        moduleId,
      },
    });

    res.status(200).json({ data: newResource });
  } catch (error) {
    console.error("Error adding resource to module:", error);
    res.status(500).send("An error occurred while adding a resource to the module");
  }
};

// Add a new resource to a course
export const addResourceToCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, description, url, type } = req.body;

    const newResource = await db.resource.create({
      data: {
        title,
        description,
        url,
        type,
        courseId,
      },
    });

    res.status(200).json({ data: newResource });
  } catch (error) {
    console.error("Error adding resource to course:", error);
    res.status(500).send("An error occurred while adding a resource to the course");
  }
};
  
  // Update an existing resource within a module
  export const updateResource = async (req, res) => {
    try {
      const { resourceId } = req.params;
      const { title, description, url, type } = req.body;
  
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


