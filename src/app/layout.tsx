import type { ReactNode } from "react";
import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Shell } from "@/app/shell";

export const metadata: Metadata = {
  title: "Air Navigation",
  description: "Air Navigation",
};

type Props = Readonly<{
  children: ReactNode;
}>;
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <title>nav</title>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
