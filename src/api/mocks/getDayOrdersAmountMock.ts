import { http, HttpResponse } from "msw";
import { DayOrdersAmountResponse } from "../getDayOrdersAmount";

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  DayOrdersAmountResponse
>("/metrics/day-orders-amount", () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  });
});
