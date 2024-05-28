import React from "react";

const PDFViewer = ({ resource }) => {
  return (
    <div
      key={resource?.id}
      className="flex items-center justify-center h-screen bg-gray-100 rounded-md"
    >
      <object
        data={resource?.url}
        type="application/pdf"
        width="80%"
        height="80%"
        style={{ minHeight: "600px" }}
      >
        <p>
          Your browser does not support PDFs. Download the PDF to view it:
          <a href={resource?.url}>Download PDF</a>.
        </p>
      </object>
    </div>
  );
};

export default PDFViewer;
