export type Navaid = {
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
