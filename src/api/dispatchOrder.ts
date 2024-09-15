import { API } from "@/lib/axios";

export type DispatchOrderProps = {
  orderId: string;
};

export async function dispatchOrder({ orderId }: DispatchOrderProps) {
  await API.patch(`/orders/${orderId}/dispatch`);
}
