/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Route } from "./+types/home";

import Layout from "~/experience/layout";
import ExperienceMap from "~/experience/experience-map";
import { redirect, useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "St. Lukes" },
    { name: "description", content: "Welcome to St. Lukes!" },
  ];
}

export const loader = async ({ params }: Route.LoaderArgs) => {
  const layout = await fetch("http://localhost:3000/get-layout");
  const templateDb: {
    [key: string]: unknown;
  } = await layout.json();
  const slug = params["*"];

  if (slug && typeof slug === "string" && slug in templateDb) {
    const { layout: template, regions } =
      (templateDb[slug] as { layout: unknown; regions: unknown }) || {};

    return {
      template,
      regions,
    };
  }
  return redirect("/not-found");
};

export default function Home(props: any) {
  const { template, regions } = useLoaderData<{
    template: keyof typeof Layout;
    regions: unknown;
  }>();
  const layout = Layout[template];

  return layout(regions, props, ExperienceMap);
}
