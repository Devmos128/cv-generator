import fs from "fs";
import path from "path";
import React from "react";
import { renderToFile } from "@react-pdf/renderer";

import ResumeTemplate from "./templates/ResumeTemplate.jsx";
import resumeData from "./data/fullstack.json" assert { type: "json" };

async function generatePDF() {
  const outputDir = path.join(process.cwd(), "output");
  fs.mkdirSync(outputDir, { recursive: true });

  const outputPath = path.join(outputDir, "resume.pdf");

  await renderToFile(<ResumeTemplate data={resumeData} />, outputPath);

  console.log(`✅ PDF generated: ${outputPath}`);
}

generatePDF().catch((error) => {
  console.error("❌ Failed to generate PDF:", error);
});