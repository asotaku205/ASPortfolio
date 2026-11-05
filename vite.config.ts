import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploy chinh tren Vercel o duong dan goc, nen base la '/'. Neu sau nay
// chuyen sang GitHub Pages project site thi doi lai thanh '/ASPortfolio/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
