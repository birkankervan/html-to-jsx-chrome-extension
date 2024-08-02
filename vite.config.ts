import { crx } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, mergeConfig, UserConfig } from "vite";
import manifest from "./manifest.json";

// Ortak yapılandırma
const commonConfig: UserConfig = {
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
};

// Chrome uzantısı yapılandırması
const crxConfig: UserConfig = {
  plugins: [crx({ manifest })],
  build: {
    outDir: "dist/chrome",
  },
};

// Web uygulaması yapılandırması
const webConfig: UserConfig = {
  build: {
    outDir: "dist/web",
  },
};

// Yapılandırmaları birleştir
export default defineConfig(({ mode }) => {
  if (mode === "chrome") {
    return mergeConfig(commonConfig, crxConfig);
  } else {
    return mergeConfig(commonConfig, webConfig);
  }
});
