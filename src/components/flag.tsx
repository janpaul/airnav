import NextImage from "next/image";
import { Image } from "@mantine/core";
type Props = {
  countryCode: string;
  size?: "sm" | "lg";
};
export const FlagImage = ({ countryCode: cc, size = "sm" }: Props) => {
  const width = size === "sm" ? 20 : 80;
  const height = size === "sm" ? 15 : 40;
  return (
    <>
      <Image
        src={`https://flagcdn.com/w${width}/${cc}.png`}
        alt={cc}
        radius="xs"
        style={{ width, height }}
        component={NextImage}
        width={width}
        height={height}
      />
    </>
  );
};
