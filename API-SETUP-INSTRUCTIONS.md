# MindSpace API Setup Instructions

## 🚨 Current Issue: API Keys Missing/Exhausted

Your chatbot is not working because:
1. **Gemini API**: Quota exhausted (429 error)
2. **Groq API**: Key not configured

## 🔧 Quick Fix Steps

### Option 1: Use Groq (Recommended - Free & Fast)

1. **Get Groq API Key**:
   - Go to [https://console.groq.com](https://console.groq.com)
   - Sign up/login (free)
   - Navigate to "Keys" section
   - Create new API key
   - Copy the key

2. **Update .env file**:
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit .env and add your Groq key:
   GROQ_API_KEY=gsk_your_actual_groq_key_here
   ```

3. **Test the API**:
   ```bash
   node test-groq-key.js
   ```

4. **Start the application**:
   ```bash
   npm run dev
   ```

### Option 2: Fix Gemini API

1. Go to [Google AI Studio](https://aistudio.google.com)
2. Check your billing/usage limits
3. Upgrade plan or wait for quota reset
4. Update `.env` with new key if needed

## 🏗️ Project Architecture

```
mindspace/
├── server.js          # Express backend (port 5000)
├── src/App.jsx        # React frontend (port 3000)
├── test-groq-key.js   # Groq API tester
├── test-gemini-api.js # Gemini API tester
└── .env              # API keys (create from .env.example)
```

## 🔄 API Switch

The server has been updated to use Groq API by default. If you want to switch back to Gemini:

1. Edit `server.js` lines 17-75
2. Replace Groq API code with Gemini API code
3. Update console messages

## 🧪 Testing Commands

```bash
# Test Groq API
node test-groq-key.js

# Test Gemini API  
node test-gemini-api.js

# Start full application
npm run dev

# Start only backend
npm run server
```

## 📱 Application Features

- **Frontend**: React with Framer Motion animations
- **Backend**: Express.js API proxy
- **Chat Interface**: Mental wellness companion
- **Crisis Support**: Built-in helpline integration
- **Mood Tracking**: Visual mood charts
- **Anonymous Sessions**: User privacy focused

## 🎯 Next Steps

1. Get Groq API key (recommended)
2. Update `.env` file
3. Test API connection
4. Start application
5. Test chat functionality

Your MindSpace chatbot will be working once you add a valid API key!
