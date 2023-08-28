import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import glsl from "vite-plugin-glsl";
export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "/index.html",
        "/confirmation/index.html",
        "/thankyou/index.html",
      ],
    },
  },
  plugins: [ViteEjsPlugin(), glsl()],
});
