import getComponents from "../component-util";

export const LayoutDefault = (
  regions: unknown,
  props = {},
  components = {},
) => {
  if (!regions) {
    return null;
  }

  return (
    <div className={""}>
      <div className="main">
        <div className="first-region">
          {getComponents(regions, "first", props, components)}
        </div>
        <div className="second-region">
          {getComponents(regions, "second", props, components)}
        </div>
        <div className="third-region">
          {getComponents(regions, "third", props, components)}
        </div>
      </div>
    </div>
  );
};
