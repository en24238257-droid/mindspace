const fetch = require('node-fetch');
require('dotenv').config();

const checkModels = async () => {
  const apiKey = process.env.GEMINI_API_KEY;
  
  console.log('🔍 Checking available models for your API key...\n');
  console.log('API Key (first 20 chars):', apiKey?.substring(0, 20) + '...');

  if (!apiKey) {
    console.error('❌ ERROR: GEMINI_API_KEY not found in .env');
    return;
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ API ERROR');
      console.error('Status:', response.status);
      console.error('Error:', JSON.stringify(data, null, 2));
      return;
    }

    console.log('✅ Available models:\n');
    
    if (data.models && data.models.length > 0) {
      data.models.forEach(model => {
        console.log(`📝 ${model.name}`);
        console.log(`   Display Name: ${model.displayName}`);
        console.log(`   Description: ${model.description}`);
        console.log(`   Supports Generate: ${model.supportedGenerationMethods?.includes('generateContent') ? '✅' : '❌'}`);
        console.log('');
      });
    } else {
      console.log('No models found');
    }

  } catch (error) {
    console.error('❌ Network Error:', error.message);
  }
};

checkModels();
