import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// The site is deployed to GitHub Pages under /portfolio_site/.
// `base` must match so asset URLs resolve correctly in production.
export default defineConfig({
  base: "/portfolio_site/",
  plugins: [react()],
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
