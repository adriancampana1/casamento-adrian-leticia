import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
    }),
  ],
  build: {
    target: "es2020",
    minify: "esbuild",
    rollupOptions: {
      external: ["chart.js/auto", "quill"],
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["primereact"],
          // Removido framer-motion pois não está mais em uso
        },
        // Otimizar nomes de arquivos para melhor cache
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
      },
    },
    cssMinify: true,
    cssCodeSplit: true,
    sourcemap: false,
    // Otimizações adicionais
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    allowedHosts: ["a0da9192943a.ngrok-free.app"],
  },
});
