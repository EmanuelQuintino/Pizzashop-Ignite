import { http, HttpResponse } from "msw";
import { ApproveOrderProps } from "../approveOrder";

export const approveOrderMock = http.patch<ApproveOrderProps, never, never>(
  `/orders/:orderId/approve`,
  async ({ params }) => {
    if (params.orderId == "error-order-id") {
      return HttpResponse.json(null, { status: 400 });
    }

    return HttpResponse.json(null, { status: 200 });
  },
);
