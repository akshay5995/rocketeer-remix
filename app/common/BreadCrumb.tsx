import { Breadcrumbs, Anchor } from "@mantine/core";
import { Link } from "./Link";

interface Item {
  name: string;
  link: string;
}

interface Props {
  items: Item[];
}

export function BreadCrumb({ items }: Props) {
  return (
    <Breadcrumbs my="md" separator="→">
      {items.map((item) => (
        <Link to={item.link} text={item.name} size="xs" />
      ))}
    </Breadcrumbs>
  );
}
