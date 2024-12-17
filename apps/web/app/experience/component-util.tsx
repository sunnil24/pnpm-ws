/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import get from "lodash/get";
import type { JSX } from "react/jsx-runtime";

const componentParent = (
  componentObj: unknown,
  childComponent: React.ReactNode,
  classes: any
) => {
  const className = get(componentObj, ["params", "takeScreenHeight"], false)
    ? classes.coverScreen
    : "";
  const isFullBleed = get(componentObj, ["params", "fullBleed"], false);
  if (isFullBleed) {
    return <div className={className}>{childComponent}</div>;
  } else {
    return <div className={className}>{childComponent}</div>;
  }
};

const getComponent = (
  componentsListInRegion: any,
  props: any,
  components: any
) => {
  const componentsMap: JSX.Element[] = [];
  const classes = {};
  componentsListInRegion.map((componentObj, index) => {
    const newProps = Object.assign({}, componentObj, { ...props });
    const componentNameToRender = componentObj.name;
    const componentToRender = components[componentNameToRender];

    if (componentToRender) {
      // If the visibility property is set to false then the component will not be rendered
      // If the visibility property is not present or set to true then then it renders
      if (componentObj.visibility !== false) {
        componentsMap.push(
          componentParent(
            componentObj,
            React.createElement(componentToRender, {
              key: `${componentNameToRender}-${index}`,
              ...newProps,
            }),
            classes
          )
        );
      }
    } else {
      componentsMap.push(
        React.createElement(
          "div",
          {
            //note use of JS camel-cased CSS property below
            //i.e., backgroundColor
            className: "",
          },
          `Component not available - ${componentNameToRender}`
        )
      );
    }
  });
  return componentsMap;
};

const getComponents = (
  regions: Record<string, any>,
  regionIdentifier: string,
  props: any,
  components: Record<string, React.ComponentType<any>>
) => {
  const exist = regions[regionIdentifier];
  if (exist !== undefined) {
    const elements = exist.components;
    if (elements.constructor === Array && elements.length !== 0) {
      const newExperienceJson = JSON.parse(JSON.stringify(elements));
      return getComponent(newExperienceJson, props, components);
    } else {
      return null;
    }
  }
  return null;
};
export default getComponents;
