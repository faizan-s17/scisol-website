import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'
import sharp from 'sharp'

const svgPath = path.resolve(fileURLToPath(new URL('../public/og-image.svg', import.meta.url)))
const outPath = path.resolve(fileURLToPath(new URL('../public/og-image.png', import.meta.url)))

const svg = await fs.promises.readFile(svgPath)

await sharp(svg)
  .png({ quality: 90 })
  .resize(1200, 630, { fit: 'cover' })
  .toFile(outPath)

console.log('Wrote', outPath)
