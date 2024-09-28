import { API } from "@/lib/axios";

export type MonthCancelOrdersAmountResponse = {
  amount: number;
  diffFromLastMonth: number;
};

export async function getMonthCancelOrdersAmount() {
  const response = await API.get("/metrics/month-canceled-orders-amount");
  return response.data as MonthCancelOrdersAmountResponse;
}
