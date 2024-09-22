import { env } from "@/lib/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./signIn";

export const worker = setupWorker(signInMock);

export async function enableMSW() {
  if (env.MODE != "test") return;
  await worker.start();
}
