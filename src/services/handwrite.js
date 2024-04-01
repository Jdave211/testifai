const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY;
const API_ENDPOINT = 'https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/';

async function recognizeHandwriting(imagePath) {
  const data = new FormData();
  data.append('srcImg', fs.createReadStream(imagePath));

  const options = {
    method: 'POST',
    url: API_ENDPOINT,
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'pen-to-print-handwriting-ocr.p.rapidapi.com',
      ...data.getHeaders(),
    },
    data: data
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw to pass it up to the caller
  }
}

module.exports = { recognizeHandwriting }; 