export type NavAid = {
  lat: number;
  lon: number;
  elevation: number;
  channel?: string;
  frequency?: number;
  range: number;
  ident: string;
  areaCode: string;
  name: string;
};
export type TacanData = {
  areaCode: string;
  ident: string;
  channel: string;
};
