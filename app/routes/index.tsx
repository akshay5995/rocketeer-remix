import {
  Blockquote,
  Title,
  Text,
  Mark,
  Image,
  Stack,
  Group,
} from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export let meta: MetaFunction = () => {
  return {
    title: "Rocketeer.dev",
    description: "Akshay's personal site",
  };
};

export async function loader() {
  const res = await fetch("https://api.quotable.io/random");

  const { author, content } = await res.json();

  return {
    quote: {
      author,
      content,
    },
  };
}

export default function Index() {
  const data = useLoaderData();
  return (
    <div className="remix__page">
      <main>
        <Stack align="left" spacing="xl">
          <Group position="apart">
            <Title order={1}>
              <Text
                gradient={{ from: "green", to: "cyan", deg: 2 }}
                variant="gradient"
                inherit
              >
                Hi there 👋
              </Text>
            </Title>
            <Image
              radius="xl"
              width={200}
              height={200}
              src="/pic.jpeg"
              alt="profile pic"
            />
          </Group>
          <Title order={2}>
            I'm <Mark>Akshay</Mark>
          </Title>
          <Text weight={700}>
            I love building things (🚀 🚀 🚀), dogs (🐶 🐶) and football (⚽).
          </Text>
          <Blockquote cite={`- ${data.quote.author}`}>
            {data.quote.content}
          </Blockquote>
        </Stack>
      </main>
    </div>
  );
}
