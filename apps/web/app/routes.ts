import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("get-layout", "routes/get-layout.ts"),
  route("not-found", "routes/not-found.tsx"),
  route("*", "routes/dynamic-content.tsx"),
] satisfies RouteConfig;
