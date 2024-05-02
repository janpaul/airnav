import type { Navaid } from "@/model";
import navData from "@/data/raw/nav.json";
// import fixData from "./generated/fix.json";
import { regions } from "@/data/raw/regions";
import { tacanData } from "@/data/raw/tacan";

const _insertTacan = (nav: Navaid): Navaid => {
  const { areaCode, ident } = nav;
  const tacan = tacanData.find(
    (t) => t.areaCode === areaCode && t.ident === ident,
  );

  return tacan ? { ...nav, channel: tacan.channel } : { ...nav };
};

export const getNavData = (region: string) => {
  return navData
    .filter((nav) => nav.areaCode.toLowerCase() === region)
    .map(_insertTacan)
    .sort((a, b) => a.ident.localeCompare(b.ident));
};

type Region = {
  regionCode: string;
  name: string;
  countryCode: string;
};
export const getRegions = (): Region[] =>
  Object.keys(regions)
    .map((region) => ({
      regionCode: region,
      name: regions[region][0],
      countryCode: regions[region][1],
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

export const getRegion = async (region: string) =>
  getRegions().find((r) => r.regionCode.toLowerCase() === region.toLowerCase());
