import {
  Footer as StyledFooter,
  Anchor,
  ThemeIcon,
  Group,
  Center,
} from "@mantine/core";
import { BrandGithub, BrandLinkedin, BrandTwitter } from "tabler-icons-react";

export function Footer() {
  return (
    <StyledFooter height={60} p="md">
      <Center>
        <Group spacing="lg">
          <Anchor
            href="http://www.github.com/akshay5995/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <ThemeIcon
              size="lg"
              variant="gradient"
              gradient={{ from: "black", to: "grey" }}
            >
              <BrandGithub size={20} />
            </ThemeIcon>
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/akshay-ram-vignesh/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <ThemeIcon
              size="lg"
              variant="gradient"
              gradient={{ from: "blue", to: "grey" }}
            >
              <BrandLinkedin size={20} />
            </ThemeIcon>
          </Anchor>
          <Anchor
            href="https://twitter.com/akshay5995"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <ThemeIcon
              size="lg"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              <BrandTwitter size={20} />
            </ThemeIcon>
          </Anchor>
        </Group>
      </Center>
    </StyledFooter>
  );
}
