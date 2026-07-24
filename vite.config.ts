import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    exclude: ["react-icons", "react-icons/fi"],
  },

  resolve: {
    dedupe: ["react", "react-dom"],

    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});