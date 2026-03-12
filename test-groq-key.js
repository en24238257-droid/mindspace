const fetch = require('node-fetch');
require('dotenv').config();

const GROQ_API_KEY = process.env.GROQ_API_KEY;

console.log('🔍 Testing Groq API Key...\n');
console.log('API Key:', GROQ_API_KEY.substring(0, 15) + '...');

async function testGroqAPI() {
  try {
    console.log('\n📤 Sending test request to Groq API...\n');
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gemma-7b-it',
        messages: [
          {
            role: 'user',
            content: 'Say hello'
          }
        ],
        max_tokens: 100,
      }),
    });

    console.log('Status Code:', response.status);
    console.log('Status Text:', response.statusText);
    
    const data = await response.json();
    
    console.log('\n📋 Full Response:\n', JSON.stringify(data, null, 2));
    
    if (response.ok) {
      console.log('\n✅ SUCCESS! API Key is valid!');
      console.log('Response:', data.choices[0]?.message?.content);
    } else {
      console.log('\n❌ ERROR! API Key or Request Failed!');
      console.log('Error:', data.error?.message || 'Unknown error');
    }
  } catch (error) {
    console.error('\n❌ Network Error:', error.message);
  }
}

testGroqAPI();
