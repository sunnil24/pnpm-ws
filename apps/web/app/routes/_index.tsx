import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Homepage" }];
};

export default function Index() {
  return (
    <div className="">
      <h1>Hello world</h1>
    </div>
  );
}
