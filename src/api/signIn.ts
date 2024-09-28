import { API } from "@/lib/axios";

export type SignInProps = {
  email: string;
};

export async function signIn({ email }: SignInProps) {
  await API.post("/authenticate", { email });
}
