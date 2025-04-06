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

  // Handle other paths
  return new Response("Page not found", { status: 404 });
}
