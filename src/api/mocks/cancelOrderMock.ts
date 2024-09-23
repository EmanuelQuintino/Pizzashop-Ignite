import { http, HttpResponse } from "msw";
import { CancelOrderProps } from "../cancelOrder";

export const cancelOrderMock = http.patch<CancelOrderProps, never, never>(
  `/orders/:orderId/cancel`,
  async ({ params }) => {
    if (params.orderId == "error-order-id") {
      return HttpResponse.json(null, { status: 400 });
    }

    return HttpResponse.json(null, { status: 200 });
  },
);
