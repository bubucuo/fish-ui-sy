import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.PREFIX": JSON.stringify("fish"),
  },
  plugins: [react()],
});
