import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/theme/default.scss" as *;@use "@/assets/styles/animation.scss" as *;@use "@/assets/styles/mixin.scss" as *;@use "@/assets/styles/var.scss" as *;;`
      }
    },
    postcss: {
      plugins: [autoprefixer]
    }
  }
})
