import { API } from "@/lib/axios";

export type DailyRevenueInPeriodProps = {
  from?: Date;
  to?: Date;
};

export type DailyRevenueInPeriodResponse = {
  date: string;
  receipt: number;
}[];

export async function getDailyRevenueInPeriod({
  from,
  to,
}: DailyRevenueInPeriodProps) {
  const response = await API.get("/metrics/daily-receipt-in-period", {
    params: {
      from,
      to,
    },
  });
  return response.data as DailyRevenueInPeriodResponse;
}
