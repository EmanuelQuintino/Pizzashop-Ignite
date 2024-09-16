import { API } from "@/lib/axios";

export type getMonthOrdersAmountProps = {
  amount: number;
  diffFromLastMonth: number;
};

export async function getMonthOrdersAmount() {
  const response = await API.get("/metrics/month-orders-amount");
  return response.data as getMonthOrdersAmountProps;
}
