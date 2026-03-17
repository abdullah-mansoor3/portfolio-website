import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use '/' for development ('serve'), '/portfolio-website/' for production build
  base: command === 'serve' ? '/' : '/portfolio-website/',
  build: {
    target: 'es2020',
    minify: 'terser',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
  },
}))
