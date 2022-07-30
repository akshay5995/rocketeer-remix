import {
  Blockquote,
  Title,
  Text,
  Mark,
  Image,
  Stack,
  Group,
  HoverCard,
} from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getQuote } from "~/models/quote.server";

export let meta: MetaFunction = () => {
  return {
    title: "Rocketeer.dev",
    description: "Akshay's personal site",
    viewport: "width=device-width,initial-scale=1",
    "og:type": "website",
    "og:url": "https://rocketeer.dev",
    "og:title": "Rocketeer.dev",
    "og:description": "Akshay's personal site",
    "og:image":
      "https://pbs.twimg.com/profile_images/1440856408983945224/cbKRxa_-_400x400.jpg",
    "twitter:card": "summary_large_image",
    "twitter:url": "https://rocketeer.dev",
    "twitter:title": "Rocketeer.dev",
    "twitter:description": "Akshay's personal site",
    "twitter:image":
      "https://pbs.twimg.com/profile_images/1440856408983945224/cbKRxa_-_400x400.jpg",
  };
};

type LoaderData = {
  quote: Awaited<ReturnType<typeof getQuote>>;
};

export const loader = async () => {
  return json<LoaderData>({
    quote: await getQuote(),
  });
};

export default function Index() {
  const { quote } = useLoaderData() as LoaderData;

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
                Hola 👋
              </Text>
            </Title>
            <HoverCard shadow="md">
              <HoverCard.Target>
                <Image
                  radius="xl"
                  width={200}
                  height={200}
                  src="/pic.jpeg"
                  alt="profile pic"
                />
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">Yup, it's yours truly!</Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
          <Title order={2}>
            I'm <Mark>Akshay</Mark>,
          </Title>
          <Text weight={700}>
            A software developer who loves building things, dogs and football.
          </Text>
          <Text variant="text" size="sm">
            Welcome to my personal site and here's a random quote to inspire
            you!
          </Text>
          <Blockquote color="lime" cite={`- ${quote.author}`}>
            {quote.content}
          </Blockquote>
        </Stack>
      </main>
    </div>
  );
}
