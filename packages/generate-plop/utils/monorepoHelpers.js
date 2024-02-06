/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
/**
 * monorepoHelpers
 */

import fs from "fs";
import config from "../constants.js";
import { getRootDirectoryPath } from "./common.js";

const rootPath = getRootDirectoryPath();

/**
 * isMonorepo - Checks if root directory has apps or packages folder, if yes, it is monorepo application
 * @returns {boolean}
 */
export function isMonorepo() {
  const rooteDirectories = fs.readdirSync(rootPath);

  return (
    rooteDirectories.indexOf("apps") >= 0 ||
    rooteDirectories.indexOf("packages") >= 0
  );
}

/**
 * getMonorepoApps - gets all the directories in apps/packages folder and appends appropriate suffix
 * @returns {Array}
 */
// function getMonorepoApps() {
//   let apps;
//   let packages;
//   let componentPackage;
//   let hooksPackage;
//   if (fs.existsSync(`${rootPath}/${config.COMPONENT_PACKAGE}`)) {
//     componentPackage = fs.readdirSync(
//       `${rootPath}/${config.COMPONENT_PACKAGE}`
//     );
//   }
//   if (fs.existsSync(`${rootPath}/${config.APPS_PATH}`)) {
//     apps = fs.readdirSync(`${rootPath}/${config.APPS_PATH}`);
//   }
//   if (fs.existsSync(`${rootPath}/${config.PACKAGES_PATH}`)) {
//     packages = fs.readdirSync(`${rootPath}/${config.PACKAGES_PATH}`);
//   }
//   if (fs.existsSync(`${rootPath}/${config.HOOKS_PACKAGE}`)) {
//     hooksPackage = fs.readdirSync(`${rootPath}/${config.HOOKS_PACKAGE}`);
//   }

//   const appsProjects = apps
//     ? apps
//         .filter((file) => !/^\..*/.test(file))
//         .map((app) => `apps/${app}`)
//     : [];
//   const packagesProjects = packages
//     ? packages
//         .filter((file) => !/^\..*/.test(file))
//         .map((app) => `packages/${app}`)
//     : [];
//   const componentlib = componentPackage
//     ? componentPackage
//         ?.filter((file) => !/^\..*/.test(file))
//         .map((app) => `libs/ui-lib/${app}`)
//     : [];
//     const hooks = hooksPackage
//     ? hooksPackage
//         ?.filter((file) => !/^\..*/.test(file))
//         .map((app) => `libs/utils/hooks/${app}`)
//     : [];

//   return appsProjects.concat(packagesProjects).concat(componentlib).concat(hooks);
// }

function getProjects(path, prefix) {
  const fullPath = `${rootPath}/${path}`;
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  return fs.readdirSync(fullPath)
    .filter((file) => !/^\..*/.test(file))
    .map((app) => `${prefix}/${app}`);
}

function getMonorepoApps() {
  const appsProjects = getProjects(config.APPS_PATH, 'apps');
  const packagesProjects = getProjects(config.PACKAGES_PATH, 'packages');
  const componentlib = getProjects(config.COMPONENT_PACKAGE, 'libs/ui-lib');
  const hooks = getProjects(config.HOOKS_PACKAGE, 'libs/utils/hooks');
  return [...appsProjects, ...packagesProjects, ...componentlib, ...hooks];
}

export default {
  when: () => isMonorepo(),
  type: "list",
  name: "monorepoPath",
  message: "Select the destination Monorepo app for plop",
  choices: () => {
    return getMonorepoApps();
  },
};
