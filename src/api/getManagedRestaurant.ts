import { API } from "@/lib/axios";

export type ManagedRestaurantProps = {
  name: string;
  id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
};

export async function getManagedRestaurant() {
  const response = await API.get("/managed-restaurant");
  return response.data as ManagedRestaurantProps;
}
