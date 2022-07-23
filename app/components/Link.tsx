import { MantineSize, Text } from "@mantine/core";
import { Link as RemixLink } from "@remix-run/react";

interface Props {
  text: string;
  to: string;
  size?: MantineSize;
  lineClamp?: number;
}

export function Link({ text, to, size, lineClamp }: Props) {
  return (
    <Text
      variant="link"
      component={RemixLink}
      to={to}
      weight="bold"
      size={size}
      lineClamp={lineClamp}
    >
      {text}
    </Text>
  );
}
