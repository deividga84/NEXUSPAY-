import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // O SEGREDO ESTÁ AQUI EMBAIXO:
  base: './', 
})
