import type { Options } from 'tsup';

export const tsup: Options = {
  clean: true,
  dts: false,
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ['commitlint.config.js'],
  target: 'es2020',
  format: ['cjs', 'esm'],
  treeshake: true,
  splitting: false,
};
