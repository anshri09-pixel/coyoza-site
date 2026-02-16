import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/coyoza-site/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
