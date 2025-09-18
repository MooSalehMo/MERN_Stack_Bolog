import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,   
  },
  server: {
    fs: {
      strict: false 
    }
  },
  build: {
    cssCodeSplit: true,
    sourcemap: 'hidden'
  }
})