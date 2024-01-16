import type { Options } from "tsup";

export const tsup: Options = {
  clean: true,
  dts: false,
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ["index.ts"],
  target: "es2020",
  treeshake: true,
};