import { API } from "@/lib/axios";

export type OrderDetails = {
  orderId: string;
};

export type GetOrderDetailsProps = {
  id: string;
  createdAt: string;
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
  totalInCents: number;
  customer: {
    name: string;
    email: string;
    phone: string | null;
  };
  orderItems: {
    id: string;
    priceInCents: number;
    quantity: number;
    product: {
      name: string;
    };
  }[];
};

export async function getOrderDetails({ orderId }: OrderDetails) {
  const response = await API.get(`/orders/${orderId}`);

  return response.data as GetOrderDetailsProps;
}
