import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT_DIR = join(__dirname, '..')

// Image optimization configuration
const IMAGE_CONFIG = {
  // Background images (large, can use lower quality)
  backgrounds: {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 75,
    mobileMaxWidth: 800,
    mobileMaxHeight: 600,
    mobileQuality: 60
  },
  // Logo images (need higher quality for branding)
  logos: {
    maxWidth: 400,
    maxHeight: 400,
    quality: 90
  },
  // Content images (hero images, etc.)
  content: {
    maxWidth: 1200,
    maxHeight: 800,
    quality: 80,
    mobileMaxWidth: 600,
    mobileMaxHeight: 400,
    mobileQuality: 70
  }
}

async function ensureDirectory(dirPath) {
  await fs.mkdir(dirPath, { recursive: true })
}

async function optimizeImage(inputPath, outputPath, config, isMobile = false) {
  try {
    let pipeline = sharp(inputPath)
    
    // Resize if dimensions exceed max
    const metadata = await pipeline.metadata()
    const width = metadata.width || config.maxWidth
    const height = metadata.height || config.maxHeight
    
    const targetWidth = isMobile && config.mobileMaxWidth ? config.mobileMaxWidth : config.maxWidth
    const targetHeight = isMobile && config.mobileMaxHeight ? config.mobileMaxHeight : config.maxHeight
    const targetQuality = isMobile && config.mobileQuality ? config.mobileQuality : config.quality
    
    if (width > targetWidth || height > targetHeight) {
      pipeline = pipeline.resize(targetWidth, targetHeight, {
        fit: 'inside',
        withoutEnlargement: true
      })
    }
    
    // Convert to WebP with specified quality
    await pipeline
      .webp({ quality: targetQuality })
      .toFile(outputPath)
    
    return true
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message)
    return false
  }
}

async function optimizeAllImages() {
  try {
    console.log('🚀 Starting comprehensive image optimization...\n')
    
    // Ensure public directories exist
    await ensureDirectory(join(ROOT_DIR, 'public'))
    await ensureDirectory(join(ROOT_DIR, 'public', 'images'))
    await ensureDirectory(join(ROOT_DIR, 'public', 'logos'))
    
    const results = {
      optimized: [],
      skipped: [],
      errors: []
    }
    
    // 1. Optimize Hero Background
    console.log('📸 Optimizing Hero Background...')
    const heroBgSrc = join(ROOT_DIR, 'backgoundimage.png')
    try {
      await optimizeImage(
        heroBgSrc,
        join(ROOT_DIR, 'public', 'hero-bg-optimized.webp'),
        IMAGE_CONFIG.backgrounds
      )
      await optimizeImage(
        heroBgSrc,
        join(ROOT_DIR, 'public', 'hero-bg-mobile.webp'),
        IMAGE_CONFIG.backgrounds,
        true
      )
      results.optimized.push('Hero background (desktop + mobile)')
      console.log('✅ Hero background optimized\n')
    } catch (err) {
      results.errors.push('Hero background')
      console.log('⚠️  Skipped Hero background\n')
    }
    
    // 2. Optimize Contact Background
    console.log('📧 Optimizing Contact Background...')
    const contactBgSrc = join(ROOT_DIR, 'contactusbg.svg')
    try {
      await optimizeImage(
        contactBgSrc,
        join(ROOT_DIR, 'public', 'contact-bg-optimized.webp'),
        IMAGE_CONFIG.backgrounds
      )
      await optimizeImage(
        contactBgSrc,
        join(ROOT_DIR, 'public', 'contact-bg-mobile.webp'),
        IMAGE_CONFIG.backgrounds,
        true
      )
      results.optimized.push('Contact background (desktop + mobile)')
      console.log('✅ Contact background optimized\n')
    } catch (err) {
      results.errors.push('Contact background')
      console.log('⚠️  Skipped Contact background\n')
    }
    
    // 3. Optimize Logos
    console.log('🎨 Optimizing Logos...')
    const logos = [
      { src: 'logo.png', dest: 'logo-optimized.webp' },
      { src: 'logo1.png', dest: 'logo1-optimized.webp' }
    ]
    
    for (const logo of logos) {
      const srcPath = join(ROOT_DIR, 'src', 'assets', 'images', logo.src)
      const destPath = join(ROOT_DIR, 'public', 'logos', logo.dest)
      
      try {
        await optimizeImage(srcPath, destPath, IMAGE_CONFIG.logos)
        results.optimized.push(`Logo: ${logo.src}`)
        console.log(`✅ Optimized ${logo.src}`)
      } catch (err) {
        results.skipped.push(logo.src)
        console.log(`⚠️  Skipped ${logo.src}`)
      }
    }
    console.log('')
    
    // 4. Optimize Hero/Content Images
    console.log('🖼️  Optimizing Content Images...')
    const contentImages = [
      { src: 'heroimage.jpg', dest: 'heroimage-optimized.webp' },
      { src: 'heroimage1.jpg', dest: 'heroimage1-optimized.webp' }
    ]
    
    for (const img of contentImages) {
      const srcPath = join(ROOT_DIR, 'src', 'assets', 'images', img.src)
      const destPath = join(ROOT_DIR, 'public', 'images', img.dest)
      
      try {
        // Desktop version
        await optimizeImage(srcPath, destPath, IMAGE_CONFIG.content)
        
        // Mobile version
        const mobileDestPath = join(ROOT_DIR, 'public', 'images', img.dest.replace('.webp', '-mobile.webp'))
        await optimizeImage(srcPath, mobileDestPath, IMAGE_CONFIG.content, true)
        
        results.optimized.push(`Content image: ${img.src} (desktop + mobile)`)
        console.log(`✅ Optimized ${img.src}`)
      } catch (err) {
        results.skipped.push(img.src)
        console.log(`⚠️  Skipped ${img.src}`)
      }
    }
    console.log('')
    
    // 5. Check for any other PNG/JPG files in root
    console.log('🔍 Checking for additional images in root directory...')
    const rootFiles = await fs.readdir(ROOT_DIR)
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg']
    
    for (const file of rootFiles) {
      const ext = imageExtensions.find(ext => file.toLowerCase().endsWith(ext))
      if (ext && !file.includes('optimized') && !file.includes('node_modules')) {
        const srcPath = join(ROOT_DIR, file)
        const destName = file.replace(ext, '-optimized.webp')
        const destPath = join(ROOT_DIR, 'public', 'images', destName)
        
        try {
          await optimizeImage(srcPath, destPath, IMAGE_CONFIG.content)
          results.optimized.push(`Root image: ${file}`)
          console.log(`✅ Optimized ${file}`)
        } catch (err) {
          results.skipped.push(file)
          console.log(`⚠️  Skipped ${file}`)
        }
      }
    }
    console.log('')
    
    // Summary
    console.log('\n' + '='.repeat(60))
    console.log('🎉 OPTIMIZATION COMPLETE!')
    console.log('='.repeat(60))
    console.log(`\n✅ Successfully optimized: ${results.optimized.length} images`)
    results.optimized.forEach(img => console.log(`   • ${img}`))
    
    if (results.skipped.length > 0) {
      console.log(`\n⚠️  Skipped: ${results.skipped.length} images`)
      results.skipped.forEach(img => console.log(`   • ${img}`))
    }
    
    if (results.errors.length > 0) {
      console.log(`\n❌ Errors: ${results.errors.length}`)
      results.errors.forEach(img => console.log(`   • ${img}`))
    }
    
    console.log('\n📁 Output locations:')
    console.log('   • Backgrounds: /public/*.webp')
    console.log('   • Logos: /public/logos/*.webp')
    console.log('   • Content images: /public/images/*.webp')
    console.log('\n💡 Tip: Update your components to use the optimized versions!')
    console.log('='.repeat(60) + '\n')
    
  } catch (error) {
    console.error('\n❌ Fatal error:', error.message)
    console.error(error.stack)
  }
}

optimizeAllImages()
