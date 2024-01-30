/**
 * monorepoHelpers
 */

import fs from 'fs'
import config from '../constants.js'
import {getRootDirectoryPath} from './common.js'
import {metaFileRegex} from '../constants.js'

const rootPath = getRootDirectoryPath()

/**
 * isMonorepo - Checks if root directory has apps or packages folder, if yes, it is monorepo application
 * @returns {boolean}
 */
export function isMonorepo() {
  console.log('hh', rootPath)
  const rooteDirectories = fs.readdirSync(rootPath);
  console.log(rooteDirectories, 'rooteDirectories')
  
  return rooteDirectories.indexOf('apps') >= 0 || rooteDirectories.indexOf('packages') >= 0;
}

/**
 * getMonorepoApps - gets all the directories in apps/packages folder and appends appropriate suffix
 * @returns {Array}
 */
function getMonorepoApps() {
  let apps ;
  let packages; 
  let componentPackage;
  if(fs.existsSync(`${rootPath}/${config.COMPONENT_PACKAGE}`)){
     componentPackage =  fs.readdirSync(`${rootPath}/${config.COMPONENT_PACKAGE}`);
  }
  if(fs.existsSync(`${rootPath}/${config.APPS_PATH}`)){
    apps =  fs.readdirSync(`${rootPath}/${config.APPS_PATH}`);
  }
  if(fs.existsSync(`${rootPath}/${config.PACKAGES_PATH}`)){
    packages =  fs.readdirSync(`${rootPath}/${config.PACKAGES_PATH}`);
  }
  console.log(apps, 'apps')
  console.log(componentPackage, 'componentPackage')
  
  const appsProjects = apps ? apps.filter(file => !metaFileRegex.test(file)).map(app => `apps/${app}`) : []
  const packagesProjects = packages ? packages.filter(file => !metaFileRegex.test(file)).map(app => `packages/${app}`) : []
  const componentlib = componentPackage ? componentPackage?.filter(file => !metaFileRegex.test(file)).map(app => `libs/ui-lib/${app}`) : []

  return appsProjects.concat(packagesProjects).concat(componentlib)
};

export default {
  when: () => isMonorepo(),
  type: 'list',
  name: 'monorepoPath',
  message: 'Select the destination Monorepo app for plop',
  choices: () => {
    return getMonorepoApps()
  },
}