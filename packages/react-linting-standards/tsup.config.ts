import type { Options } from 'tsup';

import Config from '@sldl/tsup-config';

export const tsup: Options = {
  ...Config,
  ...{ entry: ['config/*.js', '.eslintrc.cjs'] },
} as Options;
