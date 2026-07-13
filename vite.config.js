import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// O site é publicado via GitHub Pages sob o domínio próprio mlutegar.com, que é
// servido na RAIZ do host (domínios customizados não usam o caminho /repo/).
// Por isso `base` precisa ser "/", senão os assets são pedidos em
// /portfolio_site/... e dão 404. Um arquivo public/CNAME preserva o domínio.
export default defineConfig({
  base: "/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  },
  // This project keeps JSX inside .js files (legacy from Create React App).
  // esbuild must load .js as JSX both for source and dependency pre-bundling.
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  server: {
    port: 3024,
    host: true, // expose on the network (needed inside Docker)
    open: true
  },
  build: {
    outDir: "build" // keep the same folder gh-pages already deploys
  },
  // This project keeps JSX in .js files (legacy from Create React App).
  // Tell esbuild's dependency optimizer to treat .js as JSX too.
  optimizeDeps: {
    esbuildOptions: {
      loader: {".js": "jsx"}
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js"
  }
});
