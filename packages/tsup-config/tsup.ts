export default {
  clean: true,
  dts: true,
  minify: true,
  bundle: false,
  skipNodeModulesBundle: true,
  entry: {
    index: 'index.ts',
  },
  target: 'es2022',
  format: ['esm'],
  treeshake: true,
  splitting: true,
};
