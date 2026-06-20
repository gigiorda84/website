"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

// Cal.com booking popup. Booking page: https://cal.com/brokerbrain/30min
export function BookCallButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace="30min"
      data-cal-link="brokerbrain/30min"
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {label}
    </button>
  );
}
