import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

/** 路径查找 */
const pathResovle = (dir: string) : string => {
  return resolve(__dirname,'.', dir)
}
/** 设置别名 */
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
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
