import { MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import {
  Container,
  Title,
  Text,
  Paper,
  Badge,
  Group,
  Stack,
  Button,
} from "@mantine/core";
import { json } from "@remix-run/node";
import { getPosts, Post } from "~/models/post.server";
import type { LoaderFunction } from "@remix-run/node";
import { IconEye } from "@tabler/icons";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
  showingDrafts: boolean;
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const showDrafts = url.searchParams.get("draft") === "true";

  return json<LoaderData>({
    posts: await getPosts(showDrafts),
    showingDrafts: showDrafts,
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
  const { posts, showingDrafts } = useLoaderData();

  return (
    <Container>
      <Group position="apart">
        <Title order={3} p="lg">
          <Text
            gradient={{ from: "green", to: "cyan", deg: 2 }}
            variant="gradient"
            inherit
          >
            Posts
          </Text>
        </Title>
        {!showingDrafts && (
          <Button
            leftIcon={<IconEye size={18} />}
            variant="subtle"
            size="xs"
            component={Link}
            to="?draft=true"
            compact
          >
            See drafts?
          </Button>
        )}
      </Group>
      <Stack spacing="sm">
        {posts.map((post: Post) => (
          <Paper key={post.slug} withBorder radius="lg" p="lg">
            <Text
              variant="link"
              component={Link}
              to={post.slug}
              weight="initial"
            >
              {post.title}
              {!post.published && <Badge mx="sm">Draft</Badge>}
            </Text>
            <Text size="sm" weight="normal">
              {post.description}
            </Text>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
}
