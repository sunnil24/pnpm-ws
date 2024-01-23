Tailwind Configuration Package
Our Tailwind Configuration Package offers a custom configuration for Tailwind CSS. It comes with a set of pre-defined themes, utility classes, and all necessary Tailwind-related packages.

## Installation
Follow these steps to install the Tailwind Configuration Package:

## Step 1
Run the following command in your project directory:

yarn add @xyzproject/tailwind-config-design-system@latest

## Step 2
Create two configuration files in your project:

Tailwind.config.js
Postcss.config.js
In these files, import the respective configurations from the installed package:

In Tailwind.config.js:

import { tailwindConfig } from "@xyzproject/tailwind-config-design-system";

In Postcss.config.js:

import { postconfig } from "@xyzproject/tailwind-config-design-system";


Package Contents
The Tailwind Configuration Package provides the following files:

/styles: Contains style-related configurations and utilities.
index.cjs: The CommonJS export of the package.
index.d.cts: TypeScript declaration file.
index.d.ts: TypeScript declaration file.
index.js: The main JavaScript export of the package.

With this package, you can leverage the power of Tailwind CSS with a custom configuration tailored for the XYZ project.

