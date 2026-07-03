import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Copy founder image if it exists
try {
  const destDir = path.resolve('src/assets/founder');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const srcFile = path.resolve('src/pictures of me/WhatsApp Image 2026-06-29 at 16.00.42.jpeg');
  const destFile = path.resolve(destDir, 'founder.jpg');
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
    console.log('Successfully copied founder image to', destFile);
  } else {
    console.error('Source file not found:', srcFile);
  }
} catch (err) {
  console.error('Error copying file:', err);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
