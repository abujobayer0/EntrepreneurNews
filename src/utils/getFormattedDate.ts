// src/utils/getFormattedDate.ts
import { format } from "date-fns";
import { bn, enUS } from "date-fns/locale";

export const getFormattedDate = (lng: string) => {
  const now = new Date();
  const locale = lng === "bn" ? bn : enUS;

  const formattedDate = format(now, "EEEE, dd MMMM, yyyy", { locale });

  // For Bangla digits (optional)
  if (lng === "bn") {
    return formattedDate.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
  }

  return formattedDate;
};
