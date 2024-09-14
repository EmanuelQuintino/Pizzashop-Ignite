import { API } from "@/lib/axios";

export type GetOrdersQuery = {
  pageIndex?: number | null;
};

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

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const response = await API.get("/orders", {
    params: {
      pageIndex,
    },
  });

  return response.data as GetOrdersProps;
}
