import { Header as StyledHeader, Text, Title, Group } from "@mantine/core";
import { Link } from "remix";

export function Header() {
  return (
    <StyledHeader height={60} p="xs">
      <Group spacing={"lg"}>
        <Link to="/">
          <Title order={1}>
            <Text
              gradient={{ from: "indigo", to: "cyan", deg: 10 }}
              variant="gradient"
              inherit
              weight={900}
            >
              Rocketeer
            </Text>
          </Title>
        </Link>
        <Text variant="link" weight={900}>
          <Link to="posts">Posts</Link>
        </Text>
      </Group>
    </StyledHeader>
  );
}
