import { MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { Container, Title, Text, List, ThemeIcon } from "@mantine/core";
import { LayersLinked } from "tabler-icons-react";
import { json } from "remix";
import { postFromModule } from "~/utils/post.server";
import * as pbi from "./powerbi-report-component.mdx";
import * as js from "./javascript.mdx";
import * as useReport from "./use-report.mdx";

export const loader = () => {
  return json([
    postFromModule(pbi),
    postFromModule(js),
    postFromModule(useReport),
  ]);
};

export let meta: MetaFunction = () => {
  return {
    title: "Posts",
    description: "Posts of Rocketeer",
  };
};

export default function Posts() {
  const posts = useLoaderData();

  return (
    <Container>
      <Title order={3} p="lg">
        <Text
          gradient={{ from: "green", to: "cyan", deg: 2 }}
          variant="gradient"
          inherit
        >
          Posts
        </Text>
      </Title>
      <List
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <LayersLinked size={16} />
          </ThemeIcon>
        }
        size="lg"
        spacing="sm"
        center
        withPadding
      >
        {posts.map((post: any) => (
          <List.Item key={post.slug}>
            <Text
              variant="link"
              component={Link}
              to={post.slug}
              weight="initial"
            >
              {post.title}
            </Text>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}
