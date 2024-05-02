import { Image } from "@mantine/core";
type Props = {
  countryCode: string;
  size?: "sm" | "lg"; // NL
};
export const FlagImage = ({ countryCode: cc, size = "sm" }: Props) => {
  const width = size === "sm" ? 20 : 60;
  const height = size === "sm" ? 15 : 20;
  return (
    <>
      <Image
        src={`https://flagcdn.com/w${width}/${cc}.png`}
        srcSet={`https://flagcdn.com/w${width * 2}/${cc}.png 2x`}
        alt={cc}
        radius="xs"
        style={{ width, height }}
      />
    </>
  );
};
