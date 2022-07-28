import { MantineProvider, AppShell, Container } from "@mantine/core";
import type { ColorScheme } from "@mantine/core";
import { themeGenerator } from "~/styles/theme";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

interface Props {
  toggleColorScheme: () => void;
  colorScheme: ColorScheme;
  children: React.ReactNode;
}

export function Layout({ colorScheme, toggleColorScheme, children }: Props) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={themeGenerator(colorScheme)}
    >
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        header={
          <Header
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          />
        }
        footer={<Footer />}
      >
        <Container size={"sm"}>{children}</Container>
      </AppShell>
    </MantineProvider>
  );
}
