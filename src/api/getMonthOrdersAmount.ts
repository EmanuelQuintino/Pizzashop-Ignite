import { API } from "@/lib/axios";

export type MonthOrdersAmountResponse = {
  amount: number;
  diffFromLastMonth: number;
};

export async function getMonthOrdersAmount() {
  const response = await API.get("/metrics/month-orders-amount");
  return response.data as MonthOrdersAmountResponse;
}
