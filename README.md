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
 
yarn workspace tailwind-config-design-system build

## To publish the Tailwind package, use the following command:

yarn workspace tailwind-config-design-system publish

# useEnv Hook

useEnv is a custom React hook that allows you to easily manage different environment configurations in your application.

Building and Publishing useEnv Package

## To build the useEnv package, use the following command:
 
yarn workspace @xyzproject/env-hook build

## To publish the useEnv package, use the following command:

yarn workspace @xyzproject/env-hook publish

