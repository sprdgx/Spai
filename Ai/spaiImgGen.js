const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function query(data) {
  const apiUrl = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";
  const token = "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";
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios({
      url: apiUrl,
      method: 'POST',
      data,
      responseType: 'stream',
      headers,
    });

    return response.data;
  } catch (error) {
    console.error(`Error querying the API: ${error.message}`);
    throw error;
  }
}

async function generateImage(description) {
  const data = { inputs: description };
  const result = await query(data);

  const writeStream = fs.createWriteStream(path.join(process.cwd(), `generated_image_${Date.now()}.png`));
  // Using Date.now() to create a unique filename for each generated image
  result.pipe(writeStream);

  writeStream.on('finish', () => {
    console.log(`Image saved with description '${description}'`);
  });
}

module.exports = { generateImage };
