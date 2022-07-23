import { Header as StyledHeader, Text, Title, Group } from "@mantine/core";
import { Link } from "@remix-run/react";

export function Header() {
  return (
    <StyledHeader height={60} p="xs">
      <Group spacing={"lg"}>
        <Title order={2}>
          <Text
            component={Link}
            gradient={{ from: "indigo", to: "cyan", deg: 10 }}
            variant="gradient"
            inherit
            weight="bold"
            to="/"
          >
            Rocketeer.dev
          </Text>
        </Title>
        <Text variant="link" component={Link} weight="bold" to="posts">
          Posts
        </Text>
        <Text variant="link" component={Link} weight="bold" to="about">
          About
        </Text>
      </Group>
    </StyledHeader>
  );
}
