import { MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getPosts } from "~/services/post.server";
import type { PostMeta } from "~/services/post.server";
import { Container, Title, Text, List, ThemeIcon } from "@mantine/core";
import { LayersLinked } from "tabler-icons-react";

export const loader = () => getPosts();

export let meta: MetaFunction = () => {
  return {
    title: "Posts",
    description: "Posts of Rocketeer",
  };
};

export default function Posts() {
  const posts = useLoaderData<PostMeta[]>();

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
        {posts.map((post) => (
          <List.Item key={post.id}>
            <Link to={post.id}>{post.title}</Link>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}
