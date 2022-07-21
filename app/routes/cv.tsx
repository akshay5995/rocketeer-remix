import { Outlet } from "@remix-run/react";
import { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "CV",
    description: "CV of Akshay",
  };
};

export default function Posts() {
  return <Outlet />;
}
