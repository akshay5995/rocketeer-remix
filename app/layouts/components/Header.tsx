import { Header as StyledHeader, Text, Title, Group } from "@mantine/core";
import { Link } from "@remix-run/react";
import type { ColorScheme } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { IconBulb, IconBulbOff } from "@tabler/icons";

interface Props {
  toggleColorScheme: () => void;
  colorScheme: ColorScheme;
}

export function Header({ colorScheme, toggleColorScheme }: Props) {
  return (
    <StyledHeader height={60} p="xs">
      <Group position="apart">
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
        <ActionIcon
          color="dark"
          radius="xl"
          size="xl"
          onClick={toggleColorScheme}
          variant="light"
        >
          {colorScheme === "light" ? <IconBulb /> : <IconBulbOff />}
        </ActionIcon>
      </Group>
    </StyledHeader>
  );
}
