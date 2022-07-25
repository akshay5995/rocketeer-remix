import { BreadCrumb } from "~/components/BreadCrumb";
import { Header } from "~/components/Header";

interface Props {
  title: string;
}

export function PostHeader({ title }: Props) {
  return (
    <>
      <BreadCrumb items={[{ name: "Posts", link: "/posts" }]} />
      <Header title={title} />
    </>
  );
}
