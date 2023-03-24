import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imageMin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),imageMin()],
  server: {
    port: 8080,
    https: false,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4523/m1/2482261-0-default",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
