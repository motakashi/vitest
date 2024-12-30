/// <reference types="vitest"/>
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // happy-dom用の設定
  test: {
    environment: "happy-dom",
    setupFiles: ["./vitest-setup.ts"]
  },
})

