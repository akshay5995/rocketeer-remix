import { Blockquote, Title, Text, Mark } from "@mantine/core";
import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Rocketeer.dev",
    description: "Welcome to Rocketeer.dev!",
  };
};

export default function Index() {
  return (
    <div className="remix__page">
      <main>
        <Title order={1} p="md">
          <Text
            gradient={{ from: "green", to: "cyan", deg: 2 }}
            variant="gradient"
            inherit
          >
            Hi there 👋
          </Text>
        </Title>
        <Title order={2} p="md">
          I'm <Mark>Akshay,</Mark> Currently @glovo as a Software Engineer.(Ex
          @agoda)
        </Title>
        <Text weight={700} p="md">
          I love building things (🚀 🚀 🚀), dogs (🐶 🐶) and football (⚽).
        </Text>
        <Blockquote cite="– Anonymous">
          In order to understand recursion, one must first understand recursion.
        </Blockquote>
      </main>
    </div>
  );
}
