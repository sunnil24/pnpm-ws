import type { Options } from 'tsup';

export const tsup: Options = {
  clean: true,
  dts: false,
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  entry: ['config/*.js', '.eslintrc.cjs'],
  target: 'es2020',
  format: ['cjs', 'esm'],
  treeshake: true,
  splitting: false,
};
