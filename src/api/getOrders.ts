import { API } from "@/lib/axios";

export type GetOrdersProps = {
  orders: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
};

export async function getOrders() {
  const response = await API.get("/orders", {
    params: {
      pageIndex: 0,
    },
  });

  return response.data as GetOrdersProps;
}
