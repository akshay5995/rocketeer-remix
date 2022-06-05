import { MantineProvider, AppShell, Container } from "@mantine/core";
import { themeGenerator } from "~/styles/theme";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={themeGenerator()}>
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        header={<Header />}
        footer={<Footer />}
      >
        <Container size={"sm"}>{children}</Container>
      </AppShell>
    </MantineProvider>
  );
}
