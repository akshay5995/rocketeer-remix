import { MantineProvider, AppShell, Container } from "@mantine/core";
import type { ColorScheme } from "@mantine/core";
import { themeGenerator } from "~/styles/theme";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

interface Props {
  toggleMode: () => void;
  mode: ColorScheme;
  children: React.ReactNode;
}

export function Layout({ mode, toggleMode, children }: Props) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={themeGenerator(mode)}
    >
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        header={<Header mode={mode} toggleMode={toggleMode} />}
        footer={<Footer />}
      >
        <Container size={"sm"}>{children}</Container>
      </AppShell>
    </MantineProvider>
  );
}
