import type { ColorScheme } from "@mantine/core";
import { Links, Meta } from "@remix-run/react";
import { useState } from "react";
import { useColorScheme } from "./hooks/useColorScheme";
import { Layout } from "./layouts/AppLayout";

export function ErrorBoundary({ error }: { error: Error }) {
  const [colorScheme, toggleColorScheme] = useColorScheme("dark");

  console.error(error);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>ERROR!!</title>
        <Meta />
        <Links />
      </head>
      <Layout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
        </div>
      </Layout>
    </html>
  );
}
