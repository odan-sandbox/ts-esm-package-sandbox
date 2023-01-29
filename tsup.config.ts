import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/bar.mts"],
  outDir: "dist-tsup",
  format: ["esm", "cjs", "iife"],
  clean: true,
});
