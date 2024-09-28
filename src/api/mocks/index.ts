import { env } from "@/lib/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./signInMock";
import { registerRestaurantMock } from "./registerRestaurantMock";
import { getDayOrdersAmountMock } from "./getDayOrdersAmountMock";
import { getMonthCanceledOrdersAmountMock } from "./getMonthCancelOrdersAmountMock";
import { getMonthRevenueMock } from "./getMonthRevenueMock";
import { getDailyRevenueInPeriodMock } from "./getDailyRevenueInPeriodMock";
import { getPopularProductsMock } from "./getPopularProductsMock";
import { getMonthOrdersAmountMock } from "./getMonthOrdersAmountMock";
import { getProfileMock } from "./getProfileMock";
import { getManagedMock } from "./getManagedMock";
import { updateProfileMock } from "./updateProfileMock";
import { getOrdersMock } from "./getOrdersMock";
import { getOrderDetailsMock } from "./getOrderDetailsMock";
import { approveOrderMock } from "./approveOrderMock";
import { cancelOrderMock } from "./cancelOrderMock";
import { deliverOrderMock } from "./deliverOrderMock";
import { dispatchOrderMock } from "./dispatchOrderMock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
);

export async function enableMSW() {
  if (env.MODE != "test") return;
  await worker.start();
}
