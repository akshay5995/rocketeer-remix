import styles from "highlight.js/styles/night-owl.css";
import { Outlet } from "@remix-run/react";
import { ScrollUp } from "~/components/ScrollUp";
import { BreadCrumb } from "~/components/BreadCrumb";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Posts() {
  return (
    <>
      <BreadCrumb items={[{ name: "Posts", link: "/posts" }]} />
      <Outlet />
      <ScrollUp />
    </>
  );
}
