import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT_DIR = join(__dirname, '..')

async function optimizeImages() {
  try {
    // Ensure public directory exists
    await fs.mkdir(join(ROOT_DIR, 'public'), { recursive: true })
    
    // Optimize background image
    console.log('🔄 Optimizing background image...')
    await sharp(join(ROOT_DIR, 'backgoundimage.png'))
      .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 60 })
      .toFile(join(ROOT_DIR, 'public', 'hero-bg-optimized.webp'))
    
    console.log('✅ Background image optimized!')
    
    // Also create mobile version
    console.log('🔄 Creating mobile version...')
    await sharp(join(ROOT_DIR, 'backgoundimage.png'))
      .resize(800, 600, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 50 })
      .toFile(join(ROOT_DIR, 'public', 'hero-bg-mobile.webp'))
    
    console.log('✅ Mobile background created!')
    
    // Optimize hero images if they exist
    const heroImages = ['heroimage.jpg', 'heroimage1.jpg']
    for (const img of heroImages) {
      const srcPath = join(ROOT_DIR, 'src', 'assets', 'images', img)
      try {
        await sharp(srcPath)
          .resize(1200, 800, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 70 })
          .toFile(join(ROOT_DIR, 'public', `${img.split('.')[0]}-optimized.webp`))
        console.log(`✅ Optimized ${img}`)
      } catch (err) {
        console.log(`⚠️  Skipped ${img} (not found)`)
      }
    }
    
    console.log('\n🎉 All images optimized successfully!')
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

optimizeImages()
