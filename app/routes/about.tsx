import { Outlet } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";

export let meta: MetaFunction = () => {
  return {
    title: "About",
    description: "About Akshay",
    viewport: "width=device-width,initial-scale=1",
  };
};

export default function Posts() {
  return <Outlet />;
}
