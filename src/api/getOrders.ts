import { API } from "@/lib/axios";

export type GetOrdersQuery = {
  pageIndex?: number | null;
  orderId?: string | null;
  customerName?: string | null;
  status?: string | null;
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

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersQuery) {
  const response = await API.get("/orders", {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  });

  return response.data as GetOrdersProps;
}
