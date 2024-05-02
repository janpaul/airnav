import type { Navaid } from "@/model";

export const getNavAidType = (navAid: Navaid) => {
  if (navAid.channel) {
    return navAid.frequency ? "VORTAC" : "TACAN";
  } else {
    return "VOR";
  }
};
