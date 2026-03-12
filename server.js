const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Proxy endpoint for OpenRouter API
app.post('/api/chat', async (req, res) => {
  const { messages, system } = req.body;

  const apiKey = process.env.OPENROUTER_API_KEY;
  
  if (!apiKey) {
    console.error('❌ OPENROUTER_API_KEY not found');
    return res.status(500).json({
      error: 'API key not configured',
    });
  }

  try {
    console.log('📤 Sending request to OpenRouter API...');
    console.log('API Key exists:', apiKey.substring(0, 10) + '...');
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'MindSpace AI',
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          { role: 'system', content: system },
          ...messages
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ OpenRouter API Error:', JSON.stringify(data, null, 2));
      console.error('Status:', response.status);
      return res.status(response.status).json({
        error: data.error?.message || 'OpenRouter API error',
        details: data.error
      });
    }

    console.log('✅ Success! Got response from OpenRouter');
    
    const aiText = data.choices?.[0]?.message?.content || 'No response';
    
    res.json({
      content: [
        { text: aiText }
      ]
    });
  } catch (error) {
    console.error('❌ Network/Fetch Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch from OpenRouter API: ' + error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 Using OpenRouter API`);
  console.log(`🔑 API Key configured: ${process.env.OPENROUTER_API_KEY ? '✅ Yes' : '❌ No'}`);
});
