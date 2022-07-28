import { Outlet } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";

export let meta: MetaFunction = () => {
  return {
    title: "About",
    description: "About Akshay",
    viewport: "width=device-width,initial-scale=1",
  };
};

export default function Posts() {
  return (
    <>
      <Header
        title="About Me"
        gradient={{ from: "green", to: "cyan", deg: 10 }}
        order={1}
      />
      <Outlet />
    </>
  );
}
