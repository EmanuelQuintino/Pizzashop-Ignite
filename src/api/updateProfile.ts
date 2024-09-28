import { API } from "@/lib/axios";

export type UpdateProfileProps = {
  name: string;
  description: string | null;
};

export async function updateProfile({ name, description }: UpdateProfileProps) {
  await API.put("/profile", {
    name,
    description,
  });
}
