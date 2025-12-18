import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/pl-stats-react/",
  build: {
    outDir: "docs",
    emptyOutDir: true
  }
});
