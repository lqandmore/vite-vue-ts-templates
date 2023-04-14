import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResovle = (dir: string) : string => {
  return resolve(__dirname,'.', dir)
}

const alias :Record <string, string> = {
  '@': pathResovle('src'),
  'components': pathResovle('src/components'),
  'views': pathResovle('src/views'),
  'assets': pathResovle('src/assets'),
  'network': pathResovle('src/network'),
  'store': pathResovle('src/store'),
  'router': pathResovle('src/router'),
  'utils': pathResovle('src/utils'),
  'types': pathResovle('src/types'),
  'hooks': pathResovle('src/hooks'),
  'styles': pathResovle('src/styles'),
}



// https://vitejs.dev/config/
export default defineConfig({
  // root,
  resolve: {
    alias,
  },
  plugins: [vue()],
})
