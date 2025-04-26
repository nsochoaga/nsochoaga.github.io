import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nsochoaga.github.io/',
  plugins: [react()],
})