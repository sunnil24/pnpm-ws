/* eslint-disable import/extensions */
/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

import componentExists from '../utils/componentExists.js';
import monorepoQues from '../utils/monorepoHelpers.js';
import config from '../constants.js';
import fs from 'fs'
import {
  isTypescript,
  getComputedFolderPath,
  getFileExtension,
  getRootDirectoryPath,
} from '../utils/common.js';

const fileExtension = getFileExtension();

export default {
  description: 'Add a  React Package component (atoms, molecules, organisms, templates)',
  prompts: [
    monorepoQues,
    {
      type: 'list',
      name: 'folder',
      message: 'Where do you want to keep this component?',
      default: 'atoms',
      choices: () => [
        'atoms',
        'molecules',
        'organisms',
        'templates',
        'custom-path',
      ],
    },
    {
      when: (data) => data.folder === 'custom-path',
      type: 'input',
      name: 'customFolder',
      message:
        'Give the custom path for the component relative to src directory:',
      default: '/',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value, data) => {
        const compDir =
          data.folder === 'custom-path'
            ? `${config.SRC}/${data.customFolder}`
            : `${config.COMPONENT_PACKAGE}/${data.folder}`;

        if (/.+/.test(value)) {
          return componentExists(value, compDir, data.monorepoPath)
            ? 'A component with this name already exists '
            : true;
        }
        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    // Generate index.ts/js and index.test.tsx/js
    const rootPath = getRootDirectoryPath();
    let componentTemplate;
    let folderPath;
    if (fs.existsSync(`${rootPath}/${config.COMPONENT_PACKAGE}`)) {
      folderPath = `${rootPath}/libs/ui-lib/src/components/${data.folder}`
    } else {
      folderPath = `${rootPath}/${getComputedFolderPath(data.monorepoPath, config.COMPONENT_PACKAGE)}${data.folder}`;
    }
    componentTemplate = `./component-package/${fileExtension}-templates/stateless.${fileExtension}.hbs`;

    if (data.folder === 'custom-path') {
      folderPath = `${rootPath}/${getComputedFolderPath(data.monorepoPath, config.SRC)}${data.customFolder.trim()}`;
    }

    const actions = [
      {
        type: 'add',
        path: `${folderPath}/{{properCase name}}/index.${fileExtension}`,
        templateFile: `./component-package/${fileExtension}-templates/index.${fileExtension}.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${folderPath}/{{properCase name}}/tsup.config.${fileExtension}`,
        templateFile: `./component-package/${fileExtension}-templates/tsup.config.${fileExtension}.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${folderPath}/{{properCase name}}/{{properCase name}}.${isTypescript() ? 'tsx' : 'js'}`,
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${folderPath}/{{properCase name}}/tests/{{properCase name}}.test.${isTypescript() ? 'tsx' : 'js'}`,
        templateFile: `./component-package/${fileExtension}-templates/test.${fileExtension}.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${folderPath}/{{properCase name}}/{{properCase name}}.stories.${isTypescript() ? 'tsx' : 'js'}`,
        templateFile: `./component-package/${fileExtension}-templates/stories.${fileExtension}.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${folderPath}/{{properCase name}}/package.json`,
        templateFile: `./component-package/${fileExtension}-templates/package.json.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${folderPath}/{{properCase name}}/readme.md`,
        templateFile: `./component-package/${fileExtension}-templates/readme.md.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${folderPath}/{{properCase name}}/{{properCase name}}.doc.mdx`,
        templateFile: `./component-package/${fileExtension}-templates/mdx.doc.mdx.hbs`,
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
