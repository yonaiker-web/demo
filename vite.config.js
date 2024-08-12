import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://yonaiker-web.github.io/demo/",
  plugins: [react()],
});
