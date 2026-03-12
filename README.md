# 🌿 MindSpace

**AI-driven confidential mental wellness platform for Indian youth & students aged 13–25.**

A warm, empathetic, beautifully designed digital safe space — built to reduce stigma and encourage help-seeking behaviour for mental health in India.

---

## ✨ Features

| Screen | Description |
|---|---|
| 🏠 **Landing Page** | Animated hero, trust badges, features grid, testimonials carousel, helpline footer |
| 🔐 **Anonymous Onboarding** | 3-step flow, no personal data collected, random session token generated |
| 💬 **AI Chat** | OpenRouter-powered empathetic companion, streaming responses, crisis panic button |
| 📊 **Mood Tracker** | Daily mood logging, weekly chart, journal, calendar heatmap, streak tracker |
| 📚 **Resource Hub** | Breathing exercises (animated), journaling prompts, peer stories, helplines |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- An [OpenRouter API key](https://openrouter.ai/keys)

### Installation

```bash
# 1. Clone or open this folder in VSCode
cd mindspace

# 2. Install dependencies
npm install

# 3. Set up your API key
# Create .env file with your OpenRouter API key:
OPENROUTER_API_KEY=sk-or-v1-your-api-key-here
PORT=5000

# 4. Start the development servers
npm run dev
```

The app will open at **http://localhost:3001**  
Backend API runs at **http://localhost:5000**

---

## 🔑 API Key Setup

1. Go to [https://openrouter.ai/keys](https://openrouter.ai/keys)
2. Create an account or sign in
3. Create a new API key
4. Create `.env` file with:
```
OPENROUTER_API_KEY=sk-or-v1-your-api-key-here
PORT=5000
```

> ⚠️ **Important**: The .env file is excluded from git. Never commit API keys to version control.

---

## 🗂 Project Structure

```
mindspace/
├── public/
│   └── index.html              # HTML shell with Google Fonts
├── src/
│   ├── screens/
│   │   ├── LandingPage.jsx     # Hero, features, testimonials, footer
│   │   ├── OnboardingFlow.jsx  # 3-step anonymous onboarding
│   │   ├── ChatInterface.jsx   # AI chat with OpenRouter API
│   │   ├── MoodTracker.jsx     # Dashboard, charts, journal, heatmap
│   │   └── ResourceHub.jsx     # Breathing exercises, helplines, stories
│   ├── styles/
│   │   └── global.css          # Design tokens, aurora bg, animations
│   ├── App.jsx                 # Main app + screen router + cursor glow
│   └── index.js                # React entry point
├── server.js                   # Express backend with OpenRouter proxy
├── .env.example                # API key template
├── .gitignore
└── package.json
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0D1B2A` | Main background (deep midnight blue) |
| `--accent-teal` | `#4ECDC4` | Primary accent, CTAs, charts |
| `--accent-peach` | `#FFB347` | Highlights, secondary CTAs |
| `--lavender` | `#C9B8E8` | AI message bubbles, cards |
| `--text-primary` | `#F5F0EB` | Body text (warm off-white) |

**Fonts**: Fraunces (display/headings) + DM Sans (body)  
**Effects**: Glassmorphism, animated aurora gradient, noise texture overlay, cursor glow

---

## 🆘 Crisis Helplines (India)

| Helpline | Number | Hours |
|---|---|---|
| **iCall** | 9152987821 | Mon–Sat, 8am–10pm |
| **Vandrevala Foundation** | 1860-2662-345 | 24/7 |
| **NIMHANS** | 080-46110007 | Mon–Sat, 9am–1pm |

---

## 🛡 Privacy

- **No personal data collected** — no email, phone, or name required
- Anonymous session token generated locally (e.g., `calm-river-4721`)
- All conversation history stored in React state only (not localStorage, not server)
- Each session is completely fresh

---

## 📦 Dependencies

```json
{
  "framer-motion": "^11.0.0",   // All animations
  "recharts": "^2.10.0",        // Mood charts & sparklines
  "react": "^18.2.0"            // UI framework
}
```

---

## ⚠️ Disclaimer

MindSpace is **not a replacement** for professional mental health care. If you or someone you know is in crisis, please call a helpline immediately. This app is a supplementary support tool only.

---

*Built with ❤️ for Indian youth.*
