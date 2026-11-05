import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages project site: https://asotaku205.github.io/ASPortfolio/
export default defineConfig({
  base: '/ASPortfolio/',
  plugins: [react()],
})
