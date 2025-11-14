import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Workshop",
  description: "An agent that shows how to build an agent",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
