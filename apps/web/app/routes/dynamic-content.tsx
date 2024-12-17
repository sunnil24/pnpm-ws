/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Route } from "./+types/home";

import Layout from "~/experience/layout";
import ExperienceMap from "~/experience/experience-map";
import { PAGE_EXPERIENCE } from "~/experience/page-experience";
import { useLoaderData } from "react-router";

const layout = Layout[PAGE_EXPERIENCE.home.layout];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "St. Lukes" },
    { name: "description", content: "Welcome to St. Lukes!" },
  ];
}

export const loader = async () => {
  return { layout };
};

export default function Home(props: any) {
  const loaderData = useLoaderData();
  console.log(loaderData, "--");

  return layout(PAGE_EXPERIENCE.home.regions, props, ExperienceMap);
}
