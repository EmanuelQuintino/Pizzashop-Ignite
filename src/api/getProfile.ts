import { API } from "@/lib/axios";

export type GetProfileResponse = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: "manager" | "customer";
  createdAt: Date | null;
  updatedAt: Date | null;
};

export async function getProfile() {
  const response = await API.get("/me");
  return response.data as GetProfileResponse;
}
