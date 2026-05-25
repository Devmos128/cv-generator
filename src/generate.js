console.log('generate.js is running...');

const fs = require('fs');
const path = require('path');
const React = require('react');

const {
  Document,
  Page,
  Text,
  StyleSheet,
  renderToFile,
} = require('@react-pdf/renderer');

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

const Resume = () =>
  React.createElement(
    Document,
    null,
    React.createElement(
      Page,
      { size: 'A4', style: styles.page },
      React.createElement(Text, { style: styles.title }, 'Mohamed Hassan'),
      React.createElement(Text, null, 'Software Engineer')
    )
  );

async function generatePDF() {
  const outputDir = path.join(process.cwd(), 'output');
  // const outputPath = path.join(outputDir, 'resume.pdf');
  const outputPath = './output/resume.pdf';

  fs.mkdirSync(outputDir, { recursive: true });

  console.log('Rendering PDF...');

  await renderToFile(React.createElement(Resume), outputPath);

  console.log('✅ PDF generated:', outputPath);
}

generatePDF().catch((error) => {
  console.error('❌ Failed:', error);
});
