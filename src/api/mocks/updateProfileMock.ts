import { http, HttpResponse } from "msw";
import { UpdateProfileProps } from "../updateProfile";

export const updateProfileMock = http.put<never, UpdateProfileProps>(
  "/profile",
  async ({ request }) => {
    const { name } = await request.json();

    if (name == "Pizza Shop 2") {
      return new HttpResponse(null, { status: 204 });
    }
    return new HttpResponse(null, { status: 400 });
  },
);
