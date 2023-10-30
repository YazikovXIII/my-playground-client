import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react_redux_new_todos/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        nested: "404.html",
      },
    },
  },
});
