/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Route } from "./+types/home";

import { redirect } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "St. Lukes" },
    { name: "description", content: "Welcome to St. Lukes!" },
  ];
}

export const loader = async () => {
  return redirect("/home");
};
