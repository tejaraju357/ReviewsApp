import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  build: {
    outDir: 'build',
  },
  plugins: [react(), eslint()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/setupTests.js',
  },
})
