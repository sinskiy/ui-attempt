import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/index.tsx"),
      formats: ["es"],
      name: "sinskiy-ui",
      fileName: "sinskiy-ui",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "clsx",
        "tailwind-merge",
      ],
    },
  },
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ["lib"], rollupTypes: true }),
  ],
});
