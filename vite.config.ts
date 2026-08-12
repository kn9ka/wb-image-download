import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const proxy = {
  "/api/wb/cards/v4/detail": {
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/api\/wb/, ""),
    target: "https://card.wb.ru",
  },
};

export default defineConfig({
  plugins: [react()],
  preview: { proxy },
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
    proxy,
  },
});
