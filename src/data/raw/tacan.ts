import type { TacanData } from "@/model";

const ek: TacanData[] = [
  { areaCode: "EK", ident: "AAL", channel: "114X" },
  { areaCode: "EK", ident: "CDA", channel: "96X" },
  { areaCode: "EK", ident: "KAR", channel: "37X" },
  { areaCode: "EK", ident: "KAS", channel: "72X" },
  { areaCode: "EK", ident: "KOR", channel: "75X" },
  { areaCode: "EK", ident: "ODN", channel: "102X" },
  { areaCode: "EK", ident: "RAM", channel: "55Y" },
  { areaCode: "EK", ident: "ROE", channel: "57X" },
  { areaCode: "EK", ident: "SKR", channel: "41X" },
  { areaCode: "EK", ident: "TNO", channel: "121X" },
  { areaCode: "EK", ident: "VLL", channel: "87X" },
];
const eh: TacanData[] = [
  { areaCode: "EH", ident: "AMS", channel: "86Y" },
  { areaCode: "EH", ident: "DLN", channel: "59X" },
  { areaCode: "EH", ident: "EEL", channel: "71X" },
  { areaCode: "EH", ident: "EHV", channel: "119X" },
  { areaCode: "EH", ident: "GZR", channel: "111X" },
  { areaCode: "EH", ident: "HDR", channel: "102Y" },
  { areaCode: "EH", ident: "LWD", channel: "94X" },
  { areaCode: "EH", ident: "MAS", channel: "23X" },
  { areaCode: "EH", ident: "PAM", channel: "125X" },
  { areaCode: "EH", ident: "RKN", channel: "115X" },
  { areaCode: "EH", ident: "RTD", channel: "41X" },
  { areaCode: "EH", ident: "SPL", channel: "21X" },
  { areaCode: "EH", ident: "SPY", channel: "80X" },
  { areaCode: "EH", ident: "SSB", channel: "105X" },
  { areaCode: "EH", ident: "TWN", channel: "44X" },
  { areaCode: "EH", ident: "VBG", channel: "49X" },
  { areaCode: "EH", ident: "VKL", channel: "90X" },
  { areaCode: "EH", ident: "WDT", channel: "97X" },
];
const eb: TacanData[] = [
  { areaCode: "EB", ident: "AFI", channel: "96X" },
  { areaCode: "EB", ident: "ANT", channel: "82X" },
  { areaCode: "EB", ident: "BBE", channel: "107X" },
  { areaCode: "EB", ident: "BBL", channel: "35X" },
  { areaCode: "EB", ident: "BFS", channel: "52X" },
  { areaCode: "EB", ident: "BUB", channel: "93X" },
  { areaCode: "EB", ident: "BUN", channel: "43X" },
  { areaCode: "EB", ident: "CIV", channel: "79X" },
  { areaCode: "EB", ident: "COA", channel: "37Y" },
  { areaCode: "EB", ident: "FLO", channel: "57Y" },
  { areaCode: "EB", ident: "GSY", channel: "104X" },
  { areaCode: "EB", ident: "HUL", channel: "122Y" },
  { areaCode: "EB", ident: "KOK", channel: "92X" },
  { areaCode: "EB", ident: "LGE", channel: "101Y" },
  { areaCode: "EB", ident: "LNO", channel: "75X" },
  { areaCode: "EB", ident: "NIK", channel: "121X" },
  { areaCode: "EB", ident: "SPI", channel: "78X" },
];
const ed: TacanData[] = [
  { areaCode: "ED", ident: "AGD", channel: "100X" },
  { areaCode: "ED", ident: "ALB", channel: "49X" },
  { areaCode: "ED", ident: "AUG", channel: "106X" },
  { areaCode: "ED", ident: "BAM", channel: "83X" },
  { areaCode: "ED", ident: "BAY", channel: "43X" },
  { areaCode: "ED", ident: "BHD", channel: "101X" },
  { areaCode: "ED", ident: "BKD", channel: "124X" },
  { areaCode: "ED", ident: "BMN", channel: "121Y" },
  { areaCode: "ED", ident: "BUE", channel: "118X" },
  { areaCode: "ED", ident: "CDD", channel: "57Y" },
  { areaCode: "ED", ident: "COL", channel: "25X" },
  { areaCode: "ED", ident: "DHE", channel: "110X" },
  { areaCode: "ED", ident: "DKB", channel: "125X" },
  { areaCode: "ED", ident: "DLE", channel: "99X" },
  { areaCode: "ED", ident: "DMN", channel: "107X" },
  { areaCode: "ED", ident: "DMS", channel: "023X" },
  { areaCode: "ED", ident: "DND", channel: "101X" },
  { areaCode: "ED", ident: "DOM", channel: "74X" },
  { areaCode: "ED", ident: "DON", channel: "42Y" },
  { areaCode: "ED", ident: "DOR", channel: "23Y" },
  { areaCode: "ED", ident: "DRN", channel: "90Y" },
  { areaCode: "ED", ident: "DUS", channel: "98Y" },
  { areaCode: "ED", ident: "EFD", channel: "57Y" },
  { areaCode: "ED", ident: "EGB", channel: "111X" },
  { areaCode: "ED", ident: "END", channel: "101X" },
];

export const tacanData: TacanData[] = [...eh, ...eb, ...ed, ...ek];
