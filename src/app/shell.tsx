"use client";
import type { ReactNode } from "react";
import NextLink from "next/link";
import { AppShell, Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHome2, IconMap2, IconTableRow } from "@tabler/icons-react";

type Props = Readonly<{
  children: ReactNode;
}>;
export const Shell = ({ children }: Props) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <AppShell
        header={{ height: "30px" }}
        navbar={{
          width: "160px",
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <NavLink
            href="/"
            label="Home"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
            component={NextLink}
          />
          <NavLink
            href="/"
            label="Map"
            disabled
            leftSection={<IconMap2 size="1rem" stroke={1.5} />}
            component={NextLink}
          />
          <NavLink
            href="/data"
            label="Data"
            leftSection={<IconTableRow size="1rem" stroke={1.5} />}
            component={NextLink}
          />
        </AppShell.Navbar>
        <AppShell.Main style={{ mt: "30px" }}>{children}</AppShell.Main>
        <AppShell.Footer>
          <small>&copy; 2024 JP</small>
        </AppShell.Footer>
      </AppShell>
    </>
  );
};
