# XYZ Project Component Library
This is the XYZ project, a component library using pnpm workspaces.

### Instalation 
Run the below command for installing all the packages of workspace

Step 1 : 
### `pnpm i`

Step 2 : 
## Runs all build scripts for generating build for each and every package.
### `pnpm buildAll`

Step 3 : 
## Builds the storybook and outputs it to the `dist/storybook` directory.
### `pnpm build:storybook`

Step 4 : 
## Runs storybook 
###  `pnpm run storybook`


### Build all the below package seperatly if you want already we built using buildAll command

## Builds the scripts package that package will help to build the component package.

### `pnpm --filter @xyzproject/scripts build`

## Builds the tailwind configuration package.

### `pnpm --filter @xyzproject/tailwind-config-design-system build`

## Builds the commit lint standards package.

### `pnpm --filter commit-lint-standards build`

## Builds the plop generation package.

### `pnpm --filter @xyzproject/generate-plop build`

## Builds the react linting standards package.

### `pnpm --filter react-linting-standards build`

##  Build the Tailwin config viewer.

### `pnpm build:tcv`

## Builds the UI library using the build script located at `scripts/dist/index.js`.

### `pnpm build:ui-lib`

## Publishing Packages

## To publish a package, use the corresponding publish script:

### `pnpm --filter @xyzproject/tailwind-config-design-system publish`

## Publishes the tailwind configuration package.

### `pnpm --filter commit-lint-standards publish`

## Publishes the commit lint standards package.

### `pnpm --filter @xyzproject/generate-plop publish`

## Publishes the plop generation package.

### `pnpm --filter react-linting-standards publish`

## Publishes the react linting standards package.

### `pnpm publish:ui-lib`

