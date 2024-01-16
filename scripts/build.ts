import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export function generateAndRunViteConfig(component: string, componentPath: string) {
  const normalizedComponentPath = path.join(componentPath).replace(/\\/g, '/');

  const config = `
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import dts from 'vite-plugin-dts';
    import path from 'path'

    export default defineConfig({
      plugins: [react(), dts({
        beforeWriteFile: (filePath, content) => {
          if (filePath.endsWith('${component}.d.ts')) {
            const newFilePath = filePath.replace('${component}.d.ts', '../../../index.d.ts');
            return {
              filePath: newFilePath,
              content,
            };
          }
          return false;
        },
      })],
      build: {
        lib: {
          entry: path.join('${normalizedComponentPath}', 'index.ts'),
          name: '${component}',
          fileName: (format) => \`\${format}/index.js\`,
          formats: ['es', 'cjs'],
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
    })
  `;

  const tempViteConfigPath = `${path.join(normalizedComponentPath, 'vite.config.temp.ts')}`;

  fs.writeFileSync(tempViteConfigPath, config);
  execSync('rimraf dist && vite build --config vite.config.temp.ts', {
    stdio: 'inherit',
    cwd: componentPath,
  });
  fs.unlinkSync(tempViteConfigPath);
}
