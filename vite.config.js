import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

/**
 * build-fältet konfigurerar undersidor så att de kan hittas av Vite.
 * Vite är nämligen ett byggverktyg för ensidiga-applikationer.
 * plugin-fältet lägger till och kör insticksmodulerna Vite Imagetools
 * och Vite Plugin Image Optimizer
 */
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        gallery: 'gallery.html',
        workflow: 'sass.html',
        animering: 'animering.html'
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