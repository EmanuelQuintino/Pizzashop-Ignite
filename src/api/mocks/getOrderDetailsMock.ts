import { http, HttpResponse } from "msw";
import { GetOrderDetailsResponse, OrderDetails } from "../getOrderDetails";

export const getOrderDetailsMock = http.get<
  OrderDetails,
  never,
  GetOrderDetailsResponse
>(`/orders/:orderId`, ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "John Doe",
      email: "johndoe@email.com",
      phone: "99999-9999",
    },
    status: "pending",
    createdAt: new Date().toISOString(),
    totalInCents: 13000,
    orderItems: [
      {
        id: "item-1",
        priceInCents: 5000,
        product: { name: "Pizza Pepperoni" },
        quantity: 2,
      },
      {
        id: "item-2",
        priceInCents: 3000,
        product: { name: "Pizza MArguerita" },
        quantity: 1,
      },
    ],
  });
});
