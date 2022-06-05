import { useLoaderData, Link, MetaFunction } from "remix";
import { getPosts } from "~/services/post.server";
import type { PostMeta } from "~/services/post.server";
import { Container, Title, Text, List } from "@mantine/core";

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
      <Title order={3}>
        <Text
          gradient={{ from: "green", to: "cyan", deg: 2 }}
          variant="gradient"
          inherit
        >
          Posts
        </Text>
      </Title>
      <List size="lg" withPadding>
        {posts.map((post) => (
          <List.Item key={post.id}>
            <Link to={post.id}>{post.title}</Link>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}
