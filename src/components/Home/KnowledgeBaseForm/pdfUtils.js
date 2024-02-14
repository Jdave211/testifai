import pdfjs from 'pdfjs-dist';

export async function extractTextFromPDF(file) {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  const pdf = await new Promise((resolve, reject) => {
    reader.onload = (event) => {
      const typedArray = new Uint8Array(event.target.result);
      pdfjs.getDocument(typedArray).promise.then(resolve, reject);
    };
  });
  const text = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map((item) => item.str).join('\n');
    text.push(pageText);
  }
  return text.join('\n');
}
