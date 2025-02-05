export default {
  clean: true,
  dts: true,
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  entry: {
    index: "index.ts",
  },
  target: "es2022",
  format: ["cjs", "esm"],
  treeshake: true,
  splitting: true,
};
