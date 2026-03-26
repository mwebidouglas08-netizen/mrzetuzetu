# Mr. ZetuZetu — Trading Website

A full-stack trading education website for the Deriv platform, featuring:
- Cinematic animated hero with live candlestick chart
- Live ticker (VOL indices, Crash/Boom, etc.)
- Bot showcase pages
- Strategies section
- Session booking system (connects to WhatsApp)
- Contact/inquiry form
- Fully mobile responsive

---

## 🗂 Project Structure

```
mrzetuzetu/
├── server.js          # Express server (handles API + serves static files)
├── package.json       # Dependencies
├── railway.toml       # Railway deployment config
├── Procfile           # Process file
├── .gitignore
├── .env.example
└── public/
    └── index.html     # Complete website (all HTML, CSS, JS)
```

---

## 🚀 Deploy to Railway (Step by Step)

### Step 1 — Push to GitHub

```bash
# Open your terminal, navigate to this folder
cd mrzetuzetu

# Initialize git
git init
git add .
git commit -m "Initial commit — Mr. ZetuZetu website"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/mrzetuzetu.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Railway

1. Go to **https://railway.app** and sign in (use GitHub login)
2. Click **"New Project"**
3. Click **"Deploy from GitHub repo"**
4. Select your **mrzetuzetu** repository
5. Railway will auto-detect Node.js and deploy

### Step 3 — Get Your Live URL

1. In Railway dashboard, click your project
2. Click **"Settings"** → **"Networking"** → **"Generate Domain"**
3. Your site will be live at: `https://mrzetuzetu-xxxx.up.railway.app`

---

## 💻 Run Locally

```bash
npm install
node server.js
```

Visit: http://localhost:3000

---

## ✅ What Works Out of the Box

- `/` — Full website
- `/api/book` — Booking form (POST) → opens WhatsApp with pre-filled message
- `/api/contact` — Contact form (POST) → opens WhatsApp with message
- `/api/health` — Health check endpoint

---

## 📱 WhatsApp Integration

All form submissions automatically format a WhatsApp message and open:
`https://wa.me/254704955242`

No backend email config needed — everything routes to WhatsApp.

---

## 🔧 Environment Variables

Railway auto-sets `PORT`. No other variables required for basic operation.

If you add email support later, add `EMAIL_USER` and `EMAIL_PASS` in Railway's Variables tab.
