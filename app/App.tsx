import { Outlet } from "@remix-run/react";
import { Layout } from "./layouts/AppLayout";
import { Document } from "./Document";

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
