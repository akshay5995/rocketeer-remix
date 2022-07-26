import styles from "highlight.js/styles/night-owl.css";
import { Outlet } from "@remix-run/react";
import { ScrollUpButton } from "~/components/ScrollUpButton";

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
      <Outlet />
      <ScrollUpButton />
    </>
  );
}
