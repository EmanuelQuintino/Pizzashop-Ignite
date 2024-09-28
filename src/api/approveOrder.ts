import { API } from "@/lib/axios";

export type ApproveOrderProps = {
  orderId: string;
};

export async function approveOrder({ orderId }: ApproveOrderProps) {
  await API.patch(`/orders/${orderId}/approve`);
}
