import componentGenerator from './react-component';
import fs from 'fs';
import componentPackageGenerator from './component-package';
import packageGenerator from './package';
import hooksGenerator from './react-hooks';
import config from './constants';
import { getRootDirectoryPath } from './utils/common';

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
