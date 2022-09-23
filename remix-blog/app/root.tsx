import { Outlet, LiveReload, Link, Links } from "@remix-run/react";
import globalStylesUrl from "~/styles/global.css";

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
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

function Layout({ children }: any): any {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          remix
        </Link>
        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}
