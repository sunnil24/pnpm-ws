
import fs from 'fs';
import path from 'path';
import minimist from 'minimist';
import { execSync } from 'child_process';
import chalk from 'chalk';
import ora from 'ora';
import { generateAndRunViteConfig } from './build';

const args = minimist(process.argv.slice(2));
const componentsDir = path.join(process.cwd(), 'libs/ui-lib/src/components');

function getComponents(dir: string, components: Record<string, string> = {}) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      if (fs.existsSync(path.join(filePath, 'package.json'))) {
        components[file] = filePath;
      } else {
        getComponents(filePath, components);
      }
    }
  });

  return components;
}

export default function runScript(script: 'build' | 'pub') {
  const executeScript = (componentPath?: string) => {
    if (componentPath) {
      const component = path.basename(componentPath);
      try {
        if (script === 'build') {
          // execSync(
          //   `rimraf dist && tsc --project tsconfig.json && copyfiles package.json README.md dist`,
          //   { stdio: 'inherit', cwd: componentPath },
          // );
          generateAndRunViteConfig(component, componentPath);
        } else if (script === 'pub') {
          if (fs.existsSync(path.join(componentPath, 'dist'))) {
            execSync(`bump && npm publish`, {
              stdio: 'inherit',
              cwd: componentPath,
            });
          } else {
            console.error(`\n${chalk.redBright('> Dist directory not found')}`);
            process.exit(1);
          }
        }
      } catch (err) {
        console.error(
          `\n${chalk.bgRedBright.bold.black('xyzproject SCRIPT ')} ${chalk.redBright(
            `Error while running target ${script} for ${component}`,
          )}`,
        );
        console.error(err);
        process.exit(1);
      }
    }
  };

  const components = getComponents(componentsDir);
  const spinner = ora(
    `${chalk.bgYellowBright.black.bold('xyzproject SCRIPT ')} ${chalk.yellowBright(
      `Started running target ${script}...\n`,
    )}`,
  ).start();

  try {
    args._.shift();

    let component = '';
    if (args._.length > 0) {
      args._.forEach(componentName => {
        const componentPath: string = components[componentName];
        component = path.basename(componentPath);
        if (componentPath) {
          executeScript(componentPath);
        }
      });
      spinner.succeed(
        `${chalk.bgGreenBright.black.bold('xyzproject SCRIPT ')} ${chalk.green(
          `Successfully ran target ${script} for ${component}`,
        )}\n`,
      );
    } else {
      Object.values(components).forEach(executeScript);
      spinner.succeed(
        `${chalk.bgGreenBright.black.bold('xyzproject SCRIPT ')} ${chalk.green(
          `Successfully ran target ${script}`,
        )}\n`,
      );
    }
  } catch (error) {
    spinner.fail(`\nFailed to run target ${script}`);
    console.error(error);
    process.exit(1);
  }
  process.exit();
}
runScript(args._[0] as 'build' | 'pub' )
