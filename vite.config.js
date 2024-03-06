import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// import setup from "./test/setup/setup.js"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup/setup.js"],
  },
})
