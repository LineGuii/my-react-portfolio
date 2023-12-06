import { defineConfig } from "vite";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: "@ui",
          replacement: resolve(projectRootDir, "src/components/ui"),
        },
        {
          find: "@components",
          replacement: resolve(projectRootDir, "src/components"),
        },
        {
          find: "@pages",
          replacement: resolve(projectRootDir, "src/pages"),
        },
      ],
    }),
  ],
});
