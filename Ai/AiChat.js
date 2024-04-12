const axios = require('axios');

async function getAIResponse(prompt) {
  const apiUrl = 'http://localhost:9999/v1/chat/completions';
  const requestData = {
    model: 'TheBloke/deepseek-coder-6.7B-instruct-GGUF/deepseek-coder-6.7b-instruct.Q4_K_S.gguf',
    stream: true,
    messages: [
      { role: 'system', content: 'always remember to reply with only 3 words in any prompt the user send' },
      { role: 'user', content: prompt },
    ],
  };

  try {
    const response = await axios.post(apiUrl, requestData);
    const responseData = response.data;
    const choices = responseData.split('{"role":"assistant","content":"').slice(1).map(choice => choice.split('"}')[0].split('\\"'));
    const words = choices.flat(Infinity).filter(Boolean);
    const sentence = words.join(' ');
    console.log('AI Response:', sentence);
  } catch (error) {
    console.error('Error fetching AI response:', error);
  }
}

// Example usage:
const userPrompt = 'Tell me more about you !';
getAIResponse(userPrompt);
