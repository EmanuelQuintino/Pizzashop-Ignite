import { API } from "@/lib/axios";

export type DeliverOrderProps = {
  orderId: string;
};

export async function deliverOrder({ orderId }: DeliverOrderProps) {
  await API.patch(`/orders/${orderId}/deliver`);
}
