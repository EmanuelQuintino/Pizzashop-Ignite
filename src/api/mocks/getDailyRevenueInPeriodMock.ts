import { http, HttpResponse } from "msw";
import { DailyRevenueInPeriodResponse } from "../getDailyRevenueInPeriod";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  DailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    { date: "01/01/2024", receipt: 2000 },
    { date: "02/01/2024", receipt: 4000 },
    { date: "03/01/2024", receipt: 8000 },
    { date: "04/01/2024", receipt: 5400 },
    { date: "05/01/2024", receipt: 3800 },
    { date: "06/01/2024", receipt: 7000 },
    { date: "07/01/2024", receipt: 6000 },
  ]);
});
