import { Group } from "@mantine/core";
import { BreadCrumb } from "~/components/BreadCrumb";
import { Header } from "~/components/Header";
import { CopyButton } from "~/components/CopyButton";
import { useEffect, useState } from "react";

interface Props {
  title: string;
}

export function PostHeader({ title }: Props) {
  const [current, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    setCurrentUrl(window.location.toString());
  }, []);

  return (
    <>
      <BreadCrumb items={[{ name: "Posts", link: "/posts" }]} />
      <Group>
        <Header title={title} />
        <CopyButton content={current} />
      </Group>
    </>
  );
}
