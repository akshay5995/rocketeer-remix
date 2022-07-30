import ReactDOM from "react-dom";
import { RemixBrowser } from "@remix-run/react";
import { ClientProvider } from "@mantine/remix";

ReactDOM.hydrate(
  <ClientProvider>
    <RemixBrowser />
  </ClientProvider>,
  document
);
