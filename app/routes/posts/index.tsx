import { MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import {
  Container,
  Title,
  Text,
  List,
  ThemeIcon,
  Paper,
  Badge,
} from "@mantine/core";
import { LayersLinked } from "tabler-icons-react";
import { json } from "@remix-run/node";
import { getPosts, Post } from "~/models/post.server";
import type { LoaderFunction } from "@remix-run/node";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const showDrafts = url.searchParams.get("draft") === "true";

  return json<LoaderData>({
    posts: await getPosts(showDrafts),
  });
};

export let meta: MetaFunction = () => {
  return {
    title: "Posts",
    description: "Posts by Akshay",
    viewport: "width=device-width,initial-scale=1",
  };
};

export default function Posts() {
  const { posts } = useLoaderData();

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
        {posts.map((post: Post) => (
          <List.Item key={post.slug}>
            <Paper shadow="xl" radius="xl" p="lg">
              <Text
                variant="link"
                component={Link}
                to={post.slug}
                weight="initial"
              >
                {post.title}
                {!post.published && <Badge mx="sm">Draft</Badge>}
              </Text>
              <Text size="sm">{post.description}</Text>
            </Paper>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}
