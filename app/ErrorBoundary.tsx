import { Links, Meta } from "@remix-run/react";
import { Layout } from "./layouts/AppLayout";

export function ErrorBoundary({ error }: { error: Error }) {
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
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
        </div>
      </Layout>
    </html>
  );
}
