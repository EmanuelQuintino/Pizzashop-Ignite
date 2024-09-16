import { API } from "@/lib/axios";

export type GetMonthRevenueProps = {
  receipt: number;
  diffFromLastMonth: number;
};

export async function getMonthRevenue() {
  const response = await API.get("/metrics/month-receipt");
  return response.data as GetMonthRevenueProps;
}
