import React from "react";
import ReactDOM from "react-dom/client";

import {
  PDFViewer,
} from "@react-pdf/renderer";

import ResumeTemplate from "./templates/ResumeTemplate.jsx";

import data from "./data/fullstack.json";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <PDFViewer
    style={{
      width: "100vw",
      height: "100vh",
    }}
  >
    <ResumeTemplate data={data} />
  </PDFViewer>
);