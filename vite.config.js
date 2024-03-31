import Inspect from "vite-plugin-inspect";
import checker from "vite-plugin-checker";
import path from "path";

export default {
  plugins: [
    Inspect(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./**/*.{ts,tsx}"',
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/game"),
    },
  },
};
