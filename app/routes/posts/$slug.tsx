import { useLoaderData } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";
import { getPost } from "~/services/post.server";
import invariant from "tiny-invariant";
import { Container, Title, Text } from "@mantine/core";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export let meta: MetaFunction = ({ params }) => {
  return {
    title: params.slug || "Post",
  };
};

export default function PostSlug() {
  const post = useLoaderData();

  return (
    <Container>
      <Title order={2}>
        <Text
          gradient={{ from: "green", to: "cyan", deg: 2 }}
          variant="gradient"
          inherit
        >
          {post.title}
        </Text>
      </Title>
      <Container dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  );
}
