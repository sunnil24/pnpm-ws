/* eslint-disable import/extensions */
import componentGenerator from './react-component/index.js';
import fs from 'fs';
import componentPackageGenerator from './component-package/index.js';
import packageGenerator from './package/index.js';
import hooksGenerator from './react-hooks/index.js';
import config from './constants.js';
import { getRootDirectoryPath } from './utils/common.js';

const rootPath = getRootDirectoryPath();

export default function (plop) {
  plop.setGenerator(
    'components',
    fs.existsSync(`${rootPath}/${config.COMPONENT_PACKAGE}`)
      ? componentPackageGenerator
      : componentGenerator,
  );
  plop.setGenerator('package', packageGenerator);
  plop.setGenerator('hooks', hooksGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
}
