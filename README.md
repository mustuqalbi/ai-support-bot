# 🤖 AI Support Chatbot — TechGear Store Demo

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI_GPT--4o--mini-412991?style=for-the-badge&logo=openai&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### 🔴 Live Demo: [ai-support-bot-green.vercel.app](https://ai-support-bot-green.vercel.app/)

> A fully functional AI-powered customer support chatbot embedded in a demo e-commerce store. Built as a portfolio project to showcase real-world AI automation for Shopify and e-commerce clients.

---

## Features

- Live AI Chat — GPT-4o-mini answers product questions, shipping, returns and warranty
- Demo Store — Realistic TechGear product catalog with 5 products
- Instant Responses — Typing indicator, auto-scroll, Enter to send
- Fully Responsive — Works on mobile, tablet and desktop
- Secure — API key never exposed to client

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI Model | OpenAI GPT-4o-mini |
| Deployment | Vercel |

---

## Run Locally

```bash
git clone https://github.com/mustuqalbi/ai-support-bot.git
cd ai-support-bot
npm install
echo "OPENAI_API_KEY=your_key_here" > .env.local
npm run dev
```

Open http://localhost:3000 and click the chat bubble (bottom-right) to talk to the AI.

---

## Project Structure

```
src/
├── app/
│   ├── api/chat/route.ts    # OpenAI API endpoint
│   └── page.tsx             # Demo store page
├── components/
│   └── ChatWidget.tsx       # Chat bubble + modal UI
└── lib/
    └── storeData.ts         # Product catalog + AI system prompt
```

---

## Built by

**Ghulam Mustafa** — AI Automation Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-ghulammustafa.dev-00D9FF?style=for-the-badge)](https://ghulammustafa.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-gmustafa--dev-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/gmustafa-dev)

> Want a custom AI chatbot for your store? [Book a free call](https://cal.com/ghulammustafa/20min)
