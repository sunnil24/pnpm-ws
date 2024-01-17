# XYZ Project Component Library

This repository contains the component library for the XYZ project, including a set of reusable components and a Tailwind CSS configuration.

## Components

The component library provides a set of reusable components such as `Button`, `Dropdown`, and `SearchBox`.

### Building and Publishing Components

To build a component, use the following command:
p
yarn build:ui-lib <ComponentName> 

## To publish a component, use the following command:
yarn publish:ui-lib <ComponentName>

Replace <ComponentName> with the name of the component you want to build or publish.


## Installing Components
yarn add @xyzproject/Button@latest -W
yarn add @xyzproject/Dropdown@latest -W
yarn add @xyzproject/SearchBox@latest -W

## Tailwind Package
The Tailwind package provides a custom configuration for Tailwind CSS, including a set of pre-defined themes and utility classes.

Building and Publishing Tailwind Package

## To build the Tailwind package, use the following command:
 
yarn workspace tailwind-config-design-system tw-build

## To publish the Tailwind package, use the following command:

yarn workspace tailwind-config-design-system tw-pub


## Installing Tailwind Package
You can install the Tailwind package in your project with the following command:

yarn add @xyzproject/tailwind-config-design-system@latest


## What Tailwind Package Provides
The Tailwind package includes the following files:

.config/postcss.config.cjs
.config/tailwind.config.cjs
.styles/normalize.css
.styles/tailwind.css
.themes/index.cjs
.themes/index.js
.index.js
.index.cjs