import { API } from "@/lib/axios";

export type CancelOrderProps = {
  orderId: string;
};

export async function cancelOrder({ orderId }: CancelOrderProps) {
  await API.patch(`/orders/${orderId}/cancel`);
}
