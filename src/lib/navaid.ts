import type { NavAid } from "@/model";

export const getNavAidType = (navAid: NavAid) => {
  if (navAid.channel) {
    return navAid.frequency ? "VORTAC" : "TACAN";
  } else {
    return "VOR";
  }
};
