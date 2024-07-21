import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { readFileSync } from "fs";
import path from "path";

import typescript from "@rollup/plugin-typescript";

const packageJson = JSON.parse(
  readFileSync("./package.json", { encoding: "utf-8" })
);
const globals = {
  ...(packageJson?.dependencies || {}),
};

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    typescript({
      tsconfig: resolve("tsconfig.json"),
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: resolve("src/components/index.ts"),
      name: "fish-ui-sy",
      fileName: (format) => `fish-ui-sy.${format}.js`,
      formats: ["cjs", "es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", ...Object.keys(globals)],
    },
  },
});
