import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  // For a user/organization site like https://brandsap.github.io
  // base should be "/" (root). This also works fine on localhost.
  base: "/",
  server: {
    port: 5173,
  },
});
