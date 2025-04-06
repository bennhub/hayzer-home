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

# Cloudflare Worker Setup and Deployment Guide

This guide will help you set up a Cloudflare Worker to serve static files (like `index.html`) and deploy it to Cloudflare Workers.

## Prerequisites
- Cloudflare account
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) CLI installed
- Node.js installed

## Step 1: Install Wrangler
First, install the Wrangler CLI globally if you haven't already.
```bash
npm install -g wrangler
```

## Step 2: Create a New Project
In the root directory of your project, initialize a new Cloudflare Worker using Wrangler:

```bash
wrangler init my-worker
cd my-worker
```

This will create a project structure with the following files:
- `wrangler.toml`: Cloudflare Workers configuration file
- `index.js`: Your Worker script (you can rename it if needed)

## Step 3: Set Up Your File Structure
To serve static files, such as an index.html, you need to place them in a public directory. Here's an example of how to structure your project:

```
/my-worker
  /public
    index.html
    style.css
    script.js
  worker.js
  wrangler.toml
```

- `public/`: Contains your static files (like index.html, CSS, JS).
- `worker.js`: Contains the Cloudflare Worker code to serve your files.
- `wrangler.toml`: Cloudflare Worker configuration.

### Example of index.html
Inside the `public/` directory, you can add your index.html file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Cloudflare Worker</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <h1>Welcome to My Cloudflare Worker!</h1>
  <script src="/script.js"></script>
</body>
</html>
```

## Step 4: Update wrangler.toml
Update your wrangler.toml file to define the entry point for your Worker and the location of your assets. Here's how your wrangler.toml should look:

```toml
name = "my-worker"
account_id = "your-cloudflare-account-id"
workers_dev = true  # Set to false if using a custom domain
compatibility_date = "2024-04-05"

# Specify the entry-point script for your Worker
main = "worker.js"

# Define the static assets directory
[assets]
directory = "./public"
```

**Explanation:**
- `name`: Name of your Worker.
- `account_id`: Your Cloudflare account ID.
- `workers_dev`: Set to true if you're deploying for development, or false if you're deploying to a custom domain.
- `main`: The entry point to your Worker script (worker.js).
- `[assets]`: Points to the directory where your static files are stored (public/).

## Step 5: Write Your Worker Script
Now, let's write the worker.js script that will handle serving your static assets. Here's a simple example using kv-asset-handler to serve the files from the public/ folder:

**worker.js**
```javascript
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  // Serve index.html for the root path
  if (url.pathname === "/" || url.pathname === "/index.html") {
    return getAssetFromKV(request);
  }

  // Serve other assets (e.g., CSS, JS)
  try {
    return await getAssetFromKV(request);
  } catch (e) {
    return new Response("Page not found", { status: 404 });
  }
}
```

**Explanation:**
- `getAssetFromKV`: This function from @cloudflare/kv-asset-handler helps serve static assets efficiently from the specified public/ folder.
- `addEventListener('fetch', ...)`: The Worker listens for incoming fetch events and calls handleRequest to determine the response.

## Step 6: Install Dependencies
If you are using the kv-asset-handler package, install it in your project:

```bash
npm install @cloudflare/kv-asset-handler
```

## Step 7: Deploy the Worker
Once you've set up the files and configurations, deploy your Worker to Cloudflare using the following command:

```bash
wrangler deploy
```

### Deploying to a Custom Domain
If you're deploying to a custom domain, set `workers_dev = false` in wrangler.toml and add your domain configuration.

## Step 8: Access Your Worker
After successful deployment, you can access your Worker at:

- **Development URL**: `https://my-worker.<account_id>.workers.dev`
- **Custom Domain URL**: If you set up a custom domain, access the Worker via your domain.

## Troubleshooting
- If you encounter the error `No event handlers were registered. This script does nothing`, make sure your worker.js includes an `addEventListener('fetch', ...)` handler.
- Ensure all your assets (like index.html, CSS, and JS files) are in the correct public/ directory, and you've configured the assets in wrangler.toml properly.o a README file.

