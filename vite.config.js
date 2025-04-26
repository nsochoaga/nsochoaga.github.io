import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.DEPLOY_ENV == 'github' ? '/nsochoaga.github.io/' : '',
  plugins: [react()],

})
