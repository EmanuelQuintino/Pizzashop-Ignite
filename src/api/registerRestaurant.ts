import { API } from "@/lib/axios";

export type RegisterRestaurantProps = {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
};

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantProps) {
  await API.post("/restaurants", {
    restaurantName,
    managerName,
    email,
    phone,
  });
}
