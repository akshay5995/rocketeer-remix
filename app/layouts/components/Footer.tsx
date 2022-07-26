import {
  Footer as StyledFooter,
  Anchor,
  ThemeIcon,
  Group,
  Center,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons";

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
            <ThemeIcon size="lg" variant="outline" radius="xl" color="teal">
              <IconBrandGithub size={20} />
            </ThemeIcon>
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/akshay-ram-vignesh/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <ThemeIcon size="lg" variant="outline" radius="xl" color="teal">
              <IconBrandLinkedin size={20} />
            </ThemeIcon>
          </Anchor>
          <Anchor
            href="https://twitter.com/akshay5995"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <ThemeIcon size="lg" radius="xl" color="teal" variant="outline">
              <IconBrandTwitter size={20} />
            </ThemeIcon>
          </Anchor>
        </Group>
      </Center>
    </StyledFooter>
  );
}
