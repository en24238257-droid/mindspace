const fetch = require('node-fetch');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const testGeminiAPI = async () => {
  console.log('📂 .env path:', path.resolve(__dirname, '.env'));
  console.log('📦 Environment variables:', Object.keys(process.env).filter(k => k.includes('GEMINI') || k.includes('GROQ') || k.includes('PORT')));
  
  const apiKey = "AIzaSyDMaKhniLIOEPbUpPG6Lw5zUP0WhczPLKw";
  
  console.log('🔍 Testing Gemini API with provided key...\n');
  console.log('API Key (first 20 chars):', apiKey?.substring(0, 20) + '...');
  console.log('Model: gemini-pro');
  console.log('Endpoint: https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent\n');

  if (!apiKey) {
    console.error('❌ ERROR: GEMINI_API_KEY not found in .env');
    return;
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          system_instruction: {
            parts: { text: 'You are a helpful assistant' }
          },
          contents: [
            {
              role: 'user',
              parts: [{ text: 'Hello! Are you working?' }]
            }
          ],
          generationConfig: {
            maxOutputTokens: 100,
            temperature: 0.7,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ API ERROR');
      console.error('Status:', response.status);
      console.error('Error:', JSON.stringify(data, null, 2));
      return;
    }

    console.log('✅ SUCCESS! API Key is working!\n');
    console.log('📝 Response from Gemini:');
    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log(aiText);
    console.log('\n✅ The chatbot is ready to use!');

  } catch (error) {
    console.error('❌ Network Error:', error.message);
  }
};

testGeminiAPI();
