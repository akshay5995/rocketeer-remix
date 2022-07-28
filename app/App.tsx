import { Outlet } from "@remix-run/react";
import { Layout } from "./layouts/AppLayout";
import { Document } from "./Document";
import { useColorScheme } from "./hooks/useColorScheme";

export default function App() {
  const [colorScheme, toggleColorScheme] = useColorScheme("dark");

  return (
    <Document>
      <Layout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <Outlet />
      </Layout>
    </Document>
  );
}
