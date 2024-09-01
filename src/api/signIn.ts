import { API } from "@/lib/axios";

export type SignInBody = {
  email: string;
};

export async function signIn({ email }: SignInBody) {
  await API.post("/authenticate", { email });
}
