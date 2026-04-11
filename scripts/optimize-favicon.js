import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeFavicon() {
  const inputPath = path.join(__dirname, '../public/favicon.png');
  const outputPath = path.join(__dirname, '../public/favicon-optimized.png');

  console.log('🔧 Optimizing favicon...');
  console.log('Input:', inputPath);

  try {
    // Get original image info
    const metadata = await sharp(inputPath).metadata();
    console.log('📊 Original size:', metadata.width, 'x', metadata.height);
    console.log('📦 Original file size:', (metadata.size / 1024).toFixed(2), 'KB');

    // Optimize favicon to 32x32 (standard favicon size)
    await sharp(inputPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({
        quality: 80,
        compressionLevel: 9,
        palette: true
      })
      .toFile(outputPath);

    // Get optimized image info
    const optimizedMetadata = await sharp(outputPath).metadata();
    const stats = fs.statSync(outputPath);
    
    console.log('✅ Optimized size:', optimizedMetadata.width, 'x', optimizedMetadata.height);
    console.log('📦 Optimized file size:', (stats.size / 1024).toFixed(2), 'KB');
    
    const savings = ((1 - stats.size / metadata.size) * 100).toFixed(1);
    console.log('💾 Size reduction:', savings + '%');
    console.log('✨ Favicon saved to:', outputPath);

  } catch (error) {
    console.error('❌ Error optimizing favicon:', error);
    process.exit(1);
  }
}

optimizeFavicon();
