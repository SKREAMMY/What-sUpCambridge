import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import 'react-redux';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: { external: ['react-redux', 'react-router', 'react-router-dom', 'redux'] }
})
