import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svgPath = join(__dirname, '../../alpha_logo.svg');
const publicDir = join(__dirname, '../public');

// Ensure public directory exists
try {
  mkdirSync(publicDir, { recursive: true });
} catch (err) {
  // Directory might already exist
}

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

async function generateFavicons() {
  console.log('Generating favicons from alpha_logo.svg...');

  const svgBuffer = readFileSync(svgPath);

  for (const { size, name } of sizes) {
    console.log(`Generating ${name} (${size}x${size})...`);

    await sharp(svgBuffer)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(join(publicDir, name));
  }

  console.log('✓ All favicons generated successfully!');
}

generateFavicons().catch(console.error);
