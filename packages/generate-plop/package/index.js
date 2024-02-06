/**
 * Package Generator
 */

/* eslint strict: ["off"] */

'use strict';

import componentExists from '../utils/componentExists.js';
import config from '../constants.js';
import {
  getComputedFolderPath,
  getFileExtension,
  getRootDirectoryPath,
} from '../utils/common.js';

const fileExtension = getFileExtension();

export default {
  description: 'Add a package',
  prompts: [
    // monorepoQues,
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'xyzpackage',
      validate: (value, data) => {
        const compDir =
          data.folder === 'custom-path'
            ? `${config.SRC}/${data.customFolder}`
            : `${config.PACKAGES_PATH}/${data.folder}`;

        if (/.+/.test(value)) {
          return componentExists(value, compDir, data.monorepoPath)
            ? 'A package with this name already exists '
            : true;
        }
        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    // Generate index.ts/js and index.test.tsx/js
    const rootPath = getRootDirectoryPath();
    let folderPath = `${rootPath}/${getComputedFolderPath(data.monorepoPath, config.PACKAGES_PATH)}`;

    if (data.folder === 'custom-path') {
      folderPath = `${rootPath}/${getComputedFolderPath(data.monorepoPath, config.SRC)}${data.customFolder.trim()}`;
    }

    const actions = [
      {
        type: 'add',
        path: `${folderPath}/{{properCase name}}/index.${fileExtension}`,
        templateFile: `package/ts-templates/index.${fileExtension}.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${folderPath}/{{properCase name}}/package.json`,
        templateFile: `package/ts-templates/package.json.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${folderPath}/{{properCase name}}/readme.md`,
        templateFile: `package/ts-templates/readme.md.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${folderPath}/{{properCase name}}/tsconfig.json`,
        templateFile: `package/ts-templates/tsconfig.json.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${folderPath}/{{properCase name}}/tsup.config.ts`,
        templateFile: `package/ts-templates/tsup.config.ts.hbs`,
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
