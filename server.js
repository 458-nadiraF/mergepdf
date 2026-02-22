const express = require('express');
const multer = require('multer');
const { PDFDocument } = require('pdf-lib');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// Serve static files from 'public' directory
app.use(express.static('public'));

// Merge endpoint
app.post('/merge', upload.fields([
  { name: 'pdf1', maxCount: 1 },
  { name: 'pdf2', maxCount: 1 }
]), async (req, res) => {
  try {
    if (!req.files || !req.files['pdf1'] || !req.files['pdf2']) {
      return res.status(400).send('Please upload both PDF files.');
    }

    const pdf1Buffer = req.files['pdf1'][0].buffer;
    const pdf2Buffer = req.files['pdf2'][0].buffer;

    const pdf1Doc = await PDFDocument.load(pdf1Buffer);
    const pdf2Doc = await PDFDocument.load(pdf2Buffer);

    const mergedPdf = await PDFDocument.create();

    const copiedPagesA = await mergedPdf.copyPages(pdf1Doc, pdf1Doc.getPageIndices());
    copiedPagesA.forEach((page) => mergedPdf.addPage(page));

    const copiedPagesB = await mergedPdf.copyPages(pdf2Doc, pdf2Doc.getPageIndices());
    copiedPagesB.forEach((page) => mergedPdf.addPage(page));

    const mergedPdfBytes = await mergedPdf.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=merged.pdf');
    res.send(Buffer.from(mergedPdfBytes));

  } catch (error) {
    console.error('Error merging PDFs:', error);
    res.status(500).send('Error merging PDFs: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
