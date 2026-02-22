const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function mergePDFs(pdf1Path, pdf2Path, outputPath) {
  try {
    console.log(`Loading ${pdf1Path}...`);
    const pdf1Bytes = fs.readFileSync(pdf1Path);
    const pdf1Doc = await PDFDocument.load(pdf1Bytes);

    console.log(`Loading ${pdf2Path}...`);
    const pdf2Bytes = fs.readFileSync(pdf2Path);
    const pdf2Doc = await PDFDocument.load(pdf2Bytes);

    const mergedPdf = await PDFDocument.create();

    console.log('Copying pages from first PDF...');
    const copiedPagesA = await mergedPdf.copyPages(pdf1Doc, pdf1Doc.getPageIndices());
    copiedPagesA.forEach((page) => mergedPdf.addPage(page));

    console.log('Copying pages from second PDF...');
    const copiedPagesB = await mergedPdf.copyPages(pdf2Doc, pdf2Doc.getPageIndices());
    copiedPagesB.forEach((page) => mergedPdf.addPage(page));

    const mergedPdfBytes = await mergedPdf.save();
    fs.writeFileSync(outputPath, mergedPdfBytes);

    console.log(`Success! Merged PDF saved as: ${outputPath}`);
    console.log(`Total pages: ${mergedPdf.getPageCount()}`);
  } catch (error) {
    console.error('Error merging PDFs:', error);
    process.exit(1);
  }
}

// Main execution
(async () => {
  try {
    if (!fs.existsSync('A.pdf') || !fs.existsSync('B.pdf')) {
      console.error('Input files A.pdf and B.pdf not found!');
      process.exit(1);
    }
    await mergePDFs('A.pdf', 'B.pdf', 'merged.pdf');
  } catch (err) {
    console.error('Fatal error:', err);
    process.exit(1);
  }
})();
