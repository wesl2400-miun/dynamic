import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

/** 
* Konfigurera Vite
*/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        gallery: 'gallery.html',
        workflow: 'sass.html',
        animering: 'animering.html',
        diagram: 'diagram.html',
        karta: 'karta.html'
      }
    }
  },
  plugins: [
    imagetools(),
    ViteImageOptimizer({
      jpeg: { quality: 30},
      webp: { quality: 30},
      svg: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'sortAttrs'}
        ]
      }
    })
  ]
});