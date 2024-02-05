import type { Options } from 'tsup';
import tsupConfig from './tsup'

 const tsup: Options = {...tsupConfig, ...{entry: {    "index": "tsup.ts",}}} as Options;
 
export default tsup