import { http, HttpResponse } from "msw";
import { MonthRevenueResponse } from "../getMonthRevenue";

export const getMonthRevenueMock = http.get<never, never, MonthRevenueResponse>(
  "/metrics/month-receipt",
  () => {
    return HttpResponse.json({
      receipt: 20000,
      diffFromLastMonth: 10,
    });
  },
);
