import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT_DIR = join(__dirname, '..')

async function optimizeContactBackground() {
  try {
    // Ensure public directory exists
    await fs.mkdir(join(ROOT_DIR, 'public'), { recursive: true })
    
    // Optimize contact background SVG to WebP
    console.log('🔄 Optimizing contact background...')
    await sharp(join(ROOT_DIR, 'contactusbg.svg'))
      .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(join(ROOT_DIR, 'public', 'contact-bg-optimized.webp'))
    
    console.log('✅ Contact background optimized!')
    
    // Create mobile version
    console.log('🔄 Creating mobile version...')
    await sharp(join(ROOT_DIR, 'contactusbg.svg'))
      .resize(800, 600, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 65 })
      .toFile(join(ROOT_DIR, 'public', 'contact-bg-mobile.webp'))
    
    console.log('✅ Mobile contact background created!')
    
    console.log('\n🎉 Contact background optimization complete!')
    console.log('\nFiles created:')
    console.log('  - public/contact-bg-optimized.webp (desktop)')
    console.log('  - public/contact-bg-mobile.webp (mobile)')
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

optimizeContactBackground()
