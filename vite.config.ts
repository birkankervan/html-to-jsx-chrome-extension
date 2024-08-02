import { crx } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv, mergeConfig, UserConfig } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";
import manifest from "./manifest.json";

const env = loadEnv(process.cwd(), "");
const gTag = env.VITE_GOOGLE_AN;

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

const crxConfig: UserConfig = {
  plugins: [crx({ manifest })],
  build: {
    outDir: "dist/chrome",
  },
  define: {
    BUILD_TYPE: JSON.stringify("chrome"),
  },
};

const webConfig: UserConfig = {
  build: {
    outDir: "dist/web",
  },
  define: {
    BUILD_TYPE: JSON.stringify("web"),
  },
  plugins: [
    VitePluginRadar({
      enableDev: true,
      analytics: {
        id: gTag as string,
      },
    }),
  ],
};

export default defineConfig(({ mode }) => {
  if (mode === "chrome") {
    return mergeConfig(commonConfig, crxConfig);
  } else {
    return mergeConfig(commonConfig, webConfig);
  }
});
