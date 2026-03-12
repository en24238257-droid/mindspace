# How to Get a Valid Groq API Key

## 🚀 Quick Steps (Free):

1. **Go to Groq Console**: https://console.groq.com
2. **Sign Up/Login** (free account)
3. **Navigate to "Keys"** section
4. **Click "Create Key"**
5. **Copy the API key** (starts with `gsk_`)
6. **Replace the key in server.js line 21**

## 📝 Example Valid Key Format:
```
gsk_abc123def456ghi789jkl012mno345pqr456stu789vwx012yz
```

## 🔧 Update Server:
Edit `server.js` line 21:
```javascript
const apiKey = "YOUR_REAL_GROQ_API_KEY_HERE";
```

## ✅ After Adding Key:
1. Restart server: `node server.js`
2. Test chat functionality
3. Your MindSpace chatbot will work!
