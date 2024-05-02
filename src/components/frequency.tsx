import { displayFrequency } from "@/lib";

type Props = {
  frequency: number;
};
export const Frequency = ({ frequency }: Props) => (
  <span>{displayFrequency(frequency)}</span>
);
