import { Text, Title } from "@mantine/core";

interface Props {
  title: string;
}

export function Header({ title }: Props) {
  return (
    <Title order={2}>
      <Text
        gradient={{ from: "green", to: "cyan", deg: 10 }}
        variant="gradient"
        inherit
        weight={900}
      >
        {title}
      </Text>
    </Title>
  );
}
