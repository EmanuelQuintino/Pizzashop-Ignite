import { API } from "@/lib/axios";

export type GetPopularProductsProps = {
  product: string;
  amount: number;
}[];

export async function getPopularProducts() {
  const response = await API.get("/metrics/popular-products");
  return response.data as GetPopularProductsProps;
}
