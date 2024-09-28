import { http, HttpResponse } from "msw";
import { DeliverOrderProps } from "../deliverOrder";

export const deliverOrderMock = http.patch<DeliverOrderProps, never, never>(
  `/orders/:orderId/deliver`,
  async ({ params }) => {
    if (params.orderId == "error-order-id") {
      return HttpResponse.json(null, { status: 400 });
    }

    return HttpResponse.json(null, { status: 200 });
  },
);
