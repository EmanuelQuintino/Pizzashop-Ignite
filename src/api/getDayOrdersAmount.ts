import { API } from "@/lib/axios";

export type DayOrdersAmountResponse = {
  amount: number;
  diffFromYesterday: number;
};

export async function getDayOrdersAmount() {
  const response = await API.get("/metrics/day-orders-amount");
  return response.data as DayOrdersAmountResponse;
}
