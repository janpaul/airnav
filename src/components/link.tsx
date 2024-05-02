import NextLink from "next/link";
import { Text } from "@mantine/core";

type Props = {
  href: string;
  title: string;
  icon?: any;
  disabled?: boolean;
};

export const Link = ({ href, title, icon: Icon, disabled = false }: Props) => (
  <NextLink
    href={disabled ? "#" : href}
    style={{
      display: "flex",
      flexDirection: "row",
      gap: "4px",
      cursor: disabled ? "default" : "pointer",
    }}
    aria-disabled={disabled}
  >
    {Icon && <Icon c={disabled ? "blue.3" : "blue.9"} />}
    <Text size="md" c={disabled ? "blue.3" : "blue.9"}>
      {title}
    </Text>
  </NextLink>
);
