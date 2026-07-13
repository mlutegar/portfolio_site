/**
 * Generates public/og-image.png (1200x630) — the social-share preview card
 * used by the Open Graph / Twitter meta tags in index.html.
 *
 * Usage: node scripts/generate-og.mjs
 */
import path from "node:path";
import {fileURLToPath} from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(__dirname, "../public/og-image.png");

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ff6b35"/>
      <stop offset="100%" stop-color="#f7931e"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="10" fill="url(#brand)"/>

  <text x="80" y="250" font-family="Segoe UI, Arial, sans-serif" font-size="86"
        font-weight="700" fill="#f8fafc">Michel Lutegar</text>

  <text x="82" y="330" font-family="Segoe UI, Arial, sans-serif" font-size="46"
        font-weight="600" fill="url(#brand)">Desenvolvedor Full-Stack</text>

  <text x="82" y="410" font-family="Segoe UI, Arial, sans-serif" font-size="32"
        fill="#94a3b8">React · TypeScript · Django · Python</text>

  <text x="82" y="560" font-family="Segoe UI, Arial, sans-serif" font-size="28"
        fill="#64748b">mlutegar.github.io/portfolio_site</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log(`Wrote ${out}`);
