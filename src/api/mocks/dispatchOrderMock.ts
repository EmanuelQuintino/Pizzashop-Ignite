import { http, HttpResponse } from "msw";
import { DispatchOrderProps } from "../dispatchOrder";

export const dispatchOrderMock = http.patch<DispatchOrderProps, never, never>(
  `/orders/:orderId/dispatch`,
  async ({ params }) => {
    console.log("aqui");

    if (params.orderId == "error-order-id") {
      return HttpResponse.json(null, { status: 400 });
    }

    return HttpResponse.json(null, { status: 200 });
  },
);
