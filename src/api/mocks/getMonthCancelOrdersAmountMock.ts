import { http, HttpResponse } from "msw";
import { MonthCancelOrdersAmountResponse } from "../getMonthCancelOrdersAmount";

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  MonthCancelOrdersAmountResponse
>("/metrics/month-canceled-orders-amount", () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5,
  });
});
