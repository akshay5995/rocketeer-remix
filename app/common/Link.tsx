import { Text } from "@mantine/core";
import { Link as RemixLink } from "@remix-run/react";

interface Props {
  text: string;
  to: string;
}

export function Link({ text, to }: Props) {
  return (
    <Text variant="link" component={RemixLink} to={to} weight="initial">
      {text}
    </Text>
  );
}
