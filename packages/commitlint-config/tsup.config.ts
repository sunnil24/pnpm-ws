import type { Options } from 'tsup';

export const tsup: Options = {
  clean: true,
  dts: true,
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ['commitlint.config.ts'],
  target: 'es2020',
  format: ['cjs', 'esm'],
  treeshake: true,
  splitting: false,
};