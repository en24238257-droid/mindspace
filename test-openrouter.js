const fetch = require('node-fetch');
require('dotenv').config();

const testOpenRouterAPI = async () => {
  const apiKey = process.env.OPENROUTER_API_KEY;
  
  console.log('🔍 Testing OpenRouter API...\n');
  console.log('API Key (first 20 chars):', apiKey?.substring(0, 20) + '...');
  console.log('Model: openai/gpt-3.5-turbo');
  console.log('Endpoint: https://openrouter.ai/api/v1/chat/completions\n');

  if (!apiKey) {
    console.error('❌ ERROR: OPENROUTER_API_KEY not found');
    return;
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'MindSpace AI Test',
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant'
          },
          {
            role: 'user',
            content: 'Hello! Are you working?'
          }
        ],
        max_tokens: 100,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ API ERROR');
      console.error('Status:', response.status);
      console.error('Error:', JSON.stringify(data, null, 2));
      return;
    }

    console.log('✅ SUCCESS! API Key is working!\n');
    console.log('📝 Response from OpenRouter:');
    const aiText = data.choices?.[0]?.message?.content;
    console.log(aiText);
    console.log('\n✅ The chatbot is ready to use!');

  } catch (error) {
    console.error('❌ Network Error:', error.message);
  }
};

testOpenRouterAPI();
