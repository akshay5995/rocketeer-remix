import { Tabs, Badge, Stack } from "@mantine/core";
import {
  IconCloudComputing,
  IconPackage,
  IconSettings,
  IconCode,
} from "@tabler/icons";

export function SkillsSection() {
  return (
    <Tabs
      color="cyan"
      radius="xl"
      orientation="vertical"
      defaultValue="languages"
      my="lg"
    >
      <Tabs.List>
        <Tabs.Tab value="languages" icon={<IconCode size={14} />}>
          Programming Languages
        </Tabs.Tab>
        <Tabs.Tab
          value="libraries"
          icon={<IconPackage size={14} />}
          color="green"
        >
          Frameworks and libraries
        </Tabs.Tab>
        <Tabs.Tab value="devops" icon={<IconSettings size={14} />} color="teal">
          DevOps
        </Tabs.Tab>
        <Tabs.Tab
          value="cloud"
          icon={<IconCloudComputing size={14} />}
          color="lime"
        >
          Cloud Providers
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="languages" pl="xs" color="cyan">
        <Stack align="flex-start" spacing="sm">
          <Badge variant="dot" color="cyan">
            Typescript
          </Badge>
          <Badge variant="dot" color="cyan">
            Scala
          </Badge>
          <Badge variant="dot" color="cyan">
            C#
          </Badge>
          <Badge variant="dot" color="cyan">
            Java
          </Badge>
          <Badge variant="dot" color="cyan">
            Clojure
          </Badge>
        </Stack>
      </Tabs.Panel>

      <Tabs.Panel value="libraries" pl="xs">
        <Stack align="flex-start" spacing="sm">
          <Badge variant="dot" color="green">
            React
          </Badge>
          <Badge variant="dot" color="green">
            Vue
          </Badge>
          <Badge variant="dot" color="green">
            Svelte
          </Badge>
          <Badge variant="dot" color="green">
            Redux
          </Badge>
          <Badge variant="dot" color="green">
            Express JS
          </Badge>
          <Badge variant="dot" color="green">
            Akka Http
          </Badge>
          <Badge variant="dot" color="green">
            Cypress
          </Badge>
          <Badge variant="dot" color="green">
            Jest
          </Badge>
          <Badge variant="dot" color="green">
            JUnit
          </Badge>
        </Stack>
      </Tabs.Panel>

      <Tabs.Panel value="devops" pl="xs">
        <Stack align="flex-start" spacing="sm">
          <Badge variant="dot" color="teal">
            AWS
          </Badge>
          <Badge variant="dot" color="teal">
            Heroku
          </Badge>
          <Badge variant="dot" color="teal">
            Vercel
          </Badge>
          <Badge variant="dot" color="teal">
            GCP
          </Badge>
        </Stack>
      </Tabs.Panel>

      <Tabs.Panel value="cloud" pl="xs">
        <Stack align="flex-start" spacing="sm">
          <Badge variant="dot" color="lime">
            Docker
          </Badge>
          <Badge variant="dot" color="lime">
            Kubernetes
          </Badge>
          <Badge variant="dot" color="lime">
            GH Actions
          </Badge>
          <Badge variant="dot" color="lime">
            GL pipelines
          </Badge>
        </Stack>
      </Tabs.Panel>
    </Tabs>
  );
}
