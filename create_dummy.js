const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');

async function createDummyPDF(filename, pageCount) {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  for (let i = 0; i < pageCount; i++) {
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 30;
    
    page.drawText(`This is page ${i + 1} of ${filename}`, {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71),
    });
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(filename, pdfBytes);
  console.log(`Created ${filename} with ${pageCount} pages.`);
}

async function main() {
  await createDummyPDF('A.pdf', 10);
  await createDummyPDF('B.pdf', 3);
}

main().catch(err => console.log(err));
