const execSync = require('child_process').execSync;
const glob = require('glob');
const fs = require('fs');
const path = require('path');

const scriptName = process.env.npm_lifecycle_event;
const operation = scriptName.split(':')[0];
const packageName = process.argv[2];

try {
  if (operation === 'build') {
    if (packageName) {
      console.log(`Building ${packageName}...`);
      execSync(`turbo run build --scope=${packageName}`, { stdio: 'inherit' });
    } else {
      console.log(`Building all packages...`);
      execSync(`turbo run build`, { stdio: 'inherit' });
    }
  } else if (operation === 'publish') {
    const packageJsonFiles = glob.sync('**/package.json', { ignore: '**/node_modules/**' });

    for (const file of packageJsonFiles) {
      const packageJson = JSON.parse(fs.readFileSync(file, 'utf8'));
      const packageDir = path.dirname(file);

      if (packageName && packageJson.name !== packageName) {
        continue;
      }

      console.log(`Bumping version and publishing ${packageJson.name}...`);
      execSync(`cd ${packageDir} && bump && cd -`, { stdio: 'inherit' });
      execSync(`pnpm publish -r --filter=${packageJson.name} --no-git-checks`, { stdio: 'inherit' });
    }
  } else {
    console.error('Invalid operation. Please use "build" or "publish".');
    process.exit(1);
  }

  console.log('Done.');
} catch (error) {
  console.error(`Error running operation: ${error.message}`);
  process.exit(1);
}
