/**
 * Image optimizer — converts the raster images referenced by the portfolio
 * to resized, compressed WebP files (huge LCP / page-weight win).
 *
 * Usage: node scripts/optimize-images.mjs
 *
 * It scans src/portfolio.js for `new URL("./assets/images/...")` references,
 * writes a .webp sibling for each, and prints the savings. Re-run any time
 * you add new images, then point portfolio.js at the .webp output.
 */
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const portfolio = fs.readFileSync(path.join(root, "src/portfolio.js"), "utf8");

// Logos render small; screenshots render large. Cap widths accordingly.
const LOGO_HINTS = [
  "logo",
  "abrapa",
  "cisco",
  "tedx",
  "okka",
  "ufrj",
  "senac",
  "editora",
  "limelabs"
];

const refs = [
  ...new Set(
    [...portfolio.matchAll(/\.\/assets\/images\/([^"']+)/g)].map(m => m[1])
  )
];

const MAX_LOGO = 320;
const MAX_SHOT = 1100;

let before = 0;
let after = 0;

for (const rel of refs) {
  const src = path.join(root, "src/assets/images", rel);
  if (!fs.existsSync(src)) {
    console.warn(`skip (missing): ${rel}`);
    continue;
  }
  const parsed = path.parse(rel);
  if (parsed.ext.toLowerCase() === ".webp") {
    console.log(`skip (already webp): ${rel}`);
    continue;
  }
  const out = path.join(root, "src/assets/images", `${parsed.name}.webp`);
  const isLogo = LOGO_HINTS.some(h => rel.toLowerCase().includes(h));
  const width = isLogo ? MAX_LOGO : MAX_SHOT;

  const srcBytes = fs.statSync(src).size;
  // Write to a temp file first so sources that are already .webp
  // (same input/output path) don't trip sharp's same-file guard.
  const tmp = out + ".tmp";
  await sharp(src)
    .resize({width, withoutEnlargement: true})
    .webp({quality: 80})
    .toFile(tmp);
  fs.copyFileSync(tmp, out);
  fs.rmSync(tmp);
  const outBytes = fs.statSync(out).size;

  before += srcBytes;
  after += outBytes;
  const pct = Math.round((1 - outBytes / srcBytes) * 100);
  console.log(
    `${rel.padEnd(24)} ${(srcBytes / 1024).toFixed(0).padStart(5)}KB -> ` +
      `${(outBytes / 1024).toFixed(0).padStart(5)}KB webp  (-${pct}%)`
  );
}

console.log(
  `\nTotal: ${(before / 1024 / 1024).toFixed(2)}MB -> ` +
    `${(after / 1024 / 1024).toFixed(2)}MB  ` +
    `(-${Math.round((1 - after / before) * 100)}%)`
);
