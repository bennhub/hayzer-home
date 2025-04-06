# 🌐 Hayzer Landing Page

Welcome to the landing page for [Hayzer.app](https://hayzer.app) — the home base for everything related to GrooveSlider and upcoming funkadelic creations.

## 🎨 What Is This?

This is a lightweight Worker-powered static site hosted on Cloudflare. It serves as the main landing page for Hayzer, introducing users to GrooveSlider — a music-reactive slideshow app that syncs visuals to the beat.

## 🚀 Live Site

- 🌍 [hayzer.app](https://hayzer.app)

## 🧠 Tech Stack

- ⚡️ Cloudflare Workers
- 🧱 HTML, CSS (Flexbox)
- 🎨 Zen Dots font for titles
- ✨ No frameworks — pure performance

## 📂 File Structure

```
hayzer-home-base/
├── public/
│   └── index.html         # Main landing page
├── wrangler.toml          # Worker config
└── README.md              # This file
```

## 🛠️ Development

To test locally with Wrangler:

```bash
npm install -g wrangler
wrangler dev
```

To publish manually:

```bash
wrangler publish
```

> You **do not need to define routes** in `wrangler.toml` if you've connected a custom domain via the Cloudflare dashboard.

## 📦 Deploys

This repo is connected to Cloudflare Workers via Git integration. Every commit to `main` triggers an auto-deploy to `https://hayzer.app`.

## ✍️ Author

**Ben Hayze**  
Musician, creator of GrooveSlider, and funkadelic digital explorer.

---

🎵 “Let the visuals ride the beat.”
