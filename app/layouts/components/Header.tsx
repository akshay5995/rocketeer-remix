import { Header as StyledHeader, Text, Title, Group } from "@mantine/core";
import { Link } from "@remix-run/react";

export function Header() {
  return (
    <StyledHeader height={60} p="xs">
      <Group spacing={"lg"}>
        <Title order={1}>
          <Text
            component={Link}
            gradient={{ from: "indigo", to: "cyan", deg: 10 }}
            variant="gradient"
            inherit
            weight={900}
            to="/"
          >
            Rocketeer
          </Text>
        </Title>
        <Text variant="link" component={Link} weight={900} to="posts">
          Posts
        </Text>
      </Group>
    </StyledHeader>
  );
}
