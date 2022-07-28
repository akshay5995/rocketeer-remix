import { Outlet } from "@remix-run/react";
import { Layout } from "./layouts/AppLayout";
import { Document } from "./Document";
import { useCallback, useEffect, useState } from "react";
import type { ColorScheme } from "@mantine/core";

export default function App() {
  const [mode, setMode] = useState<ColorScheme>("dark");

  const toggleMode = useCallback(() => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [mode]);

  return (
    <Document>
      <Layout mode={mode} toggleMode={toggleMode}>
        <Outlet />
      </Layout>
    </Document>
  );
}
