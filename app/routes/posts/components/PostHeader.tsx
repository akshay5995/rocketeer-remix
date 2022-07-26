import { Group, Alert } from "@mantine/core";
import { BreadCrumb } from "~/components/BreadCrumb";
import { Header } from "~/components/Header";
import { CopyButton } from "~/components/CopyButton";
import { useEffect, useState } from "react";
import { IconAlertCircle } from "@tabler/icons";
import { Meta } from "~/models/post.server";

export function PostHeader({ title, published }: Meta) {
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
      {!published && (
        <Alert
          icon={<IconAlertCircle size={16} />}
          title="Here be dragons (and typos) !!!"
          color="yellow"
          radius="xl"
          variant="outline"
          my="lg"
        >
          This is a draft version of this article!
        </Alert>
      )}
    </>
  );
}
