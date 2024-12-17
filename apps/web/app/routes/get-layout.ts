/* eslint-disable import/extensions */
import data from "~/data/page-experience.json";

export async function loader() {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
