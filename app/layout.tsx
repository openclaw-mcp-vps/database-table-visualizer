import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Database Table Visualizer — Generate ERD Diagrams from Live Databases",
  description: "Connect to PostgreSQL, MySQL, or SQLite and instantly generate interactive entity relationship diagrams. Built for backend developers and DBAs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fbc47634-3cc4-40ec-a60d-2e0e5ac59e1e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
