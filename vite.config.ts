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
          animation: ["framer-motion"],
        },
      },
    },
    cssMinify: true,
    cssCodeSplit: true,
    sourcemap: false,
  },
  server: {
    allowedHosts: ["a0da9192943a.ngrok-free.app"],
  },
});
