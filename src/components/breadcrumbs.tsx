import NextLink from "next/link";
import { Breadcrumbs as MantineBreadcrumbs, Anchor } from "@mantine/core";

type Breadcrumb = {
  title: string;
  href: string;
};
type Props = {
  items: Breadcrumb[];
};

export const Breadcrumbs = ({ items }: Props) => (
  <MantineBreadcrumbs>
    {items.map((item) => (
      <Anchor key={item.href} href={item.href} component={NextLink}>
        {item.title}
      </Anchor>
    ))}
  </MantineBreadcrumbs>
);
