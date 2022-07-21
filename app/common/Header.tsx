import { Text, Title, MantineGradient, TitleOrder } from "@mantine/core";

interface Props {
  title: string;
  gradient?: MantineGradient;
  order?: TitleOrder;
}

export function Header({ title, gradient, order }: Props) {
  return (
    <Title order={order || 2}>
      <Text
        gradient={gradient || { from: "green", to: "cyan", deg: 10 }}
        variant="gradient"
        inherit
        weight={900}
      >
        {title}
      </Text>
    </Title>
  );
}
