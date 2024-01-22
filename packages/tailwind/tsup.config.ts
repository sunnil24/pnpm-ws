import type { Options } from "tsup";

export const tsup: Options = {
  clean: true,
  dts: true,
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  // entryPoints: ["index.ts", "themes/index.ts", "config/*.ts"],
  entry:{
    // "themes/index": "themes/index.ts",
    "index": "index.ts",
  },
  target: "es2020",
  format:[
    "cjs","esm"
  ],
  treeshake: true,
  splitting:true
};