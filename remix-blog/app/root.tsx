import type { LinksFunction } from "@remix-run/node";
import { Outlet, LiveReload, Link, Links } from "@remix-run/react";

import styles from "./styles/app.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children, title }: any): any {
  return (
    <html lang="en">
      <head>
        <Links />
        <title>My remix Blog</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
