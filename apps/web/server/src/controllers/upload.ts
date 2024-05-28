import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import DatauriParser from "datauri/parser";

// Multer storage configuration
const storage = multer.memoryStorage(); // Store file in memory (temporary storage)
const uploadFile = multer({ storage }).single("file"); // Handle single file upload with field name 'file'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const parser = new DatauriParser();

// Route handler for file upload
export const upload = async (req, res) => {
  try {
    uploadFile(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: "File upload failed" });
      }

      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const extName = req.file.originalname.split(".").pop();
      const file = parser.format(extName, req.file.buffer);
      const result = await cloudinary.uploader.upload(file.content, {
        public_id: `pdf/${Date.now()}`,
      });

      console.log(result);
      res.json({ result, message: "File uploaded successfully" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
